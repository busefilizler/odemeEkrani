import React from 'react'
import AllTabComponent from '../components/TabComponents/AllTabComponent'
import TotalCountBox from '../components/TotalCount/TotalCountBox'

export default function BodyLayout() {
  return (
    <div className='flex flex-col lg:flex-row px-2 lg:px-10 relative'>
      <div className="bg-gray-100 flex-1">
        <AllTabComponent />
      </div>
      <div className="hidden lg:block lg:pt-20 lg:pr-15 lg:sticky lg:top-0 lg:self-start">
        <TotalCountBox />
      </div>
    </div>
  )
}
