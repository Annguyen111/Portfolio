import { useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Footer from './components/Footer'

import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  useEffect(() => {
    Aos.init({ once: true })
  }, [])

  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

export default App
