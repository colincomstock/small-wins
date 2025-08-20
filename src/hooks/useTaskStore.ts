import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_ANON_KEY!
);

type Task = {
  id: number
  title: string
  description: string
  points: number
  status: 'not started' | 'in progress' | 'completed'
}

type TaskStore = {
  tasks: Task[]
  loading: boolean
  error: string | null
  
  // Actions
  fetchTasks: () => Promise<void>
  addTask: (task: Omit<Task, 'id'>) => Promise<void>
  updateTask: (id: number, updates: Partial<Task>) => Promise<void>
  deleteTask: (id: number) => Promise<void>
  
  // Computed
  completedCount: () => number
  inProgressCount: () => number
  notStartedCount: () => number
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set, get) => ({
      tasks: [],
      loading: false,
      error: null,

      fetchTasks: async () => {
        set({ loading: true, error: null })
        try {
          const { data, error } = await supabase.from('tasks').select('*')
          if (error) throw error
          set({ tasks: data || [], loading: false })
        } catch (error: any) {
          set({ error: error?.message || 'Failed to fetch tasks', loading: false })
        }
      },

      addTask: async (task) => {
        try {
          const { data, error } = await supabase.from('tasks').insert([task]).select()
          if (error) throw error
          set(state => ({ tasks: [...state.tasks, ...(data || [])] }))
        } catch (error: any) {
          set({ error: error?.message || 'Failed to add task' })
          throw error
        }
      },

      updateTask: async (id, updates) => {
        try {
          const { error } = await supabase.from('tasks').update(updates).eq('id', id)
          if (error) throw error
          set(state => ({
            tasks: state.tasks.map(task => 
              task.id === id ? { ...task, ...updates } : task
            )
          }))
        } catch (error: any) {
          set({ error: error?.message || 'Failed to update task' })
          throw error
        }
      },

      deleteTask: async (id) => {
        try {
          const { error } = await supabase.from('tasks').delete().eq('id', id)
          if (error) throw error
          set(state => ({ tasks: state.tasks.filter(task => task.id !== id) }))
        } catch (error: any) {
          set({ error: error?.message || 'Failed to delete task' })
          throw error
        }
      },

      // Computed values
      completedCount: () => get().tasks.filter(t => t.status === 'completed').length,
      inProgressCount: () => get().tasks.filter(t => t.status === 'in progress').length,
      notStartedCount: () => get().tasks.filter(t => t.status === 'not started').length,
    }),
    {
      name: 'task-store', // localStorage key
      partialize: (state) => ({ tasks: state.tasks }), // only persist tasks
    }
  )
)
