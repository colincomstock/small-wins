import './App.css'
import PageWrapper from './components/layout/PageWrapper'
import TaskList from './components/tasks/TaskList'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <PageWrapper>
      <TaskList />
      {/*<Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/journal" element={<Journal />} />
      </Routes>*/}
    </PageWrapper>
  )
}

export default App
