import React from 'react'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import StudentDashboard from './Pages/Students/Dashboard'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StudentDashboard/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App