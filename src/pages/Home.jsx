import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import BodyLayout from '../layouts/BodyLayout'
export default function Home() {
  const steps = [
    { label: "Sipariş Detayları", disabled: false },
    { label: "Ödeme", disabled: true },
    { label: "Teşekkürler", disabled: true }
  ];
  return (
    <div className="app-container">
      <Header />
      <ProgressBar steps={steps} />
      <div className="content bg-gray-100">
        <BodyLayout />
      </div>
      <Footer />
    </div>
  )
}
