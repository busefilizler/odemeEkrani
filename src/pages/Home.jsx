import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import AllTabComponent from '../components/TabComponents/AllTabComponent'
export default function Home() {
  return (
    <div className="app-container">
      <Header />
      <ProgressBar />
      <div className="content bg-gray-100">
        <AllTabComponent />
      </div>
      <Footer />
    </div>
  )
}
