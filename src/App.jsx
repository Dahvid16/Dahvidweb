import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ComingSoon from './Pages/ComingSoon'
import NotFound from './Pages/NotFound'
import MainLayout from './Layout/MainLayout'
import SecondaryLayout from './Layout/SecondaryLayout'
import Contact from './Pages/Contact'
import HomePage from './Pages/HomePage'
import ScrollToTop from './Components/ScrollToTop'
import Links from './Pages/Links'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />} >
            <Route index element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route element={<SecondaryLayout/>}>
            <Route path="/link" element={<Links />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App