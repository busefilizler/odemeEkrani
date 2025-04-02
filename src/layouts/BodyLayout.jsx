import React from 'react'
import AllTabComponent from '../components/TabComponents/AllTabComponent'
import TotalCountBox from '../components/TotalCount/TotalCountBox'
export default function BodyLayout() {
  return (
    <div className='flex flex-col lg:flex-row px-2 lg:px-10 relative'>
      <div className="bg-gray-100 flex-1 pb-[330px] lg:pb-0">
        <AllTabComponent />
      </div>
      <div className="lg:pt-20 lg:pr-15 lg:sticky lg:top-0 lg:self-start">
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50">
          <TotalCountBox />
        </div>
        <div className="hidden lg:block">
          <TotalCountBox />
        </div>
      </div>
    </div>
  )
}
