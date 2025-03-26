import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ProgressBar from '../components/ProgressBar/ProgressBar'

export default function Home() {
  return (
    <div className="app-container">
      <Header />
      <ProgressBar />
      <div className="content bg-red-200">body</div>
      <Footer />
    </div>
  )
}
