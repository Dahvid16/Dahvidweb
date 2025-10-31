import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ComingSoon from './Pages/ComingSoon'
import NotFound from './Pages/NotFound'
import MainLayout from './Layout/MainLayout'
import Contact from './Pages/Contact'
import HomePage from './Pages/HomePage'
import ScrollToTop from './Components/ScrollToTop'

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App