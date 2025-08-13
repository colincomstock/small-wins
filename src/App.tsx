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


function App() {
  return (
    <PageWrapper>
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
  )
}

export default App
