import React from 'react'
import AllTabComponent from '../components/TabComponents/AllTabComponent'
import TotalCountBox from '../components/TotalCount/TotalCountBox'
export default function BodyLayout() {
  return (
    <div className='flex flex-row px-10'>
      <div className="bg-gray-100 flex-1">
        <AllTabComponent />
      </div>
      <div className="pt-20 pr-15">
        <TotalCountBox />
        </div>
    </div>
  )
}
