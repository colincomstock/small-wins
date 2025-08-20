import './App.css'
import PageWrapper from './components/layout/PageWrapper'
import TaskList from './components/tasks/TaskList'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Tasks from './pages/tasks'
import Goals from './pages/goals'
import Calendar from './pages/calendar'
import Journal from './pages/journal'
import WeeklySummary from './pages/weeklySummary'
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL, 
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

function App() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getTasks();
  }, []);

  async function getTasks() {
    try {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase.from("tasks").select();
      
      if (error) throw error;

      setTasks(data || []);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }

  return (
    <PageWrapper>
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Supabase Test - Tasks</h2>
        {loading && <p>Loading tasks...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {!loading && !error && tasks.length === 0 && (
          <p>No tasks found.</p>
        )}
        {!loading && tasks.length > 0 && (
          <ul className="list-disc pl-5">
            {tasks.map((task) => (
              <li key={task.id || task.name}>{task.name} - {task.description} - {task.point_value}</li>
            ))}
          </ul>
        )}
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/weekly-summary" element={<WeeklySummary />} />
      </Routes>
    </PageWrapper>
  );
}

export default App
