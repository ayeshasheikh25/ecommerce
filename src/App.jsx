import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainStack from './navigation/MainStack'
import Dashboard from './navigation/Dashboard'
import Nav from './navigation/Nav'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const Main = true

  return (
    <>
     <BrowserRouter>
      {
        Main ? (
          <>
          <Header/>
          <Nav/>
          <MainStack />
          <Footer />
          </>
        ) : <Dashboard />
      }
     </BrowserRouter>
    </>
  )
}

export default App
