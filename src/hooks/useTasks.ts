import { useQuery } from '@tanstack/react-query'
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_ANON_KEY!
);

async function fetchTasks() {
  const { data, error } = await supabase.from('tasks').select('*')
  if (error) throw error
  return data || []
}



type Task = {
  id: number
  title: string
  description: string
  points: number
  status: 'not started' | 'in progress' | 'completed'
}

export function useTasks() {
  const { isPending, isError, data, error } = useQuery<any[], Error>({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
  })

  return { isPending, isError, data, error }
}
