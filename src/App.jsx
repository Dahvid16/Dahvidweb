import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ComingSoon from './Pages/ComingSoon'
import NotFound from './Pages/NotFound'
import MainLayout from './Pages/Layout/MainLayout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App