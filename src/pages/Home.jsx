import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import BodyLayout from '../layouts/BodyLayout'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation();
  
  const steps = [
    { label: t('order.details'), disabled: false },
    { label: t('payment.title'), disabled: true },
    { label: t('order.thanks'), disabled: true }
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
