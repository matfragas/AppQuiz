import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'
import AdminQuizEditor from './pages/AdminQuizEditor'
import JoinScreen from './pages/JoinScreen'
import PlayQuiz from './pages/PlayQuiz'

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="bg-white shadow p-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link to="/" className="font-bold">Quiz Admin</Link>
          <nav>
            <Link to="/admin" className="mr-4 text-sm">Admin</Link>
          </nav>
        </div>
      </header>
      <main className="py-6">
        <div className="max-w-3xl mx-auto">
          <Routes>
            <Route path="/" element={<div className="p-4">Bienvenue — <Link to="/admin" className="text-blue-600">Aller à l'administration</Link></div>} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/edit/:quizId" element={<AdminQuizEditor />} />
            <Route path="/play/:quizId" element={<JoinScreen />} />
            <Route path="/play/:quizId/:playerId" element={<PlayQuiz />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}
