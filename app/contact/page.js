import React from 'react'
import Location from '../components/Location'

function page() {
  return (
    <div className="w-4/5 mx-auto text-text">
      <h1 className="text-4xl lg:text-6xl font-bold">Contact Me</h1>
      <div className="py-10">
        <Location />
      </div>
    </div>
  )
}

export default page
