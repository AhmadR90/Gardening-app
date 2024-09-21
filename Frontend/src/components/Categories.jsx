import React from 'react'
import Flower from './Flower'
const Categories = () => {
  return (
    <div>
      <div className="flex justify-center space-x-4 mt-28 mr-3 ml-3">
      <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md w-1/3">
        <img src="https://img.icons8.com/?size=100&id=htOOvGIOQJR2&format=png&color=000000" alt="Logo 1" className="mb-4" />
        <h2 className="text-xl font-semibold mb-2">GARDENS </h2>
        <p className="text-center">This is a description for the first div.</p>
      </div>

      <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md w-1/3">
        <img src="https://img.icons8.com/?size=128&id=9TtMMut8nDXB&format=png" alt="Logo 2" className="mb-4" />
        <h2 className="text-xl font-semibold mb-2">AGRICULTURE</h2>
        <p className="text-center">This is a description for the second div.</p>
      </div>

      <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md w-1/3">
        <img src="https://img.icons8.com/?size=100&id=18053&format=png&color=000000" alt="Logo 3" className="mb-4" />
        <h2 className="text-xl font-semibold mb-2">ECO SYSTEM</h2>
        <p className="text-center">This is a description for the third div.</p>
      </div>
      
    </div>
    <Flower/>
    <div className="flex justify-center space-x-4 mt-28 mr-3 ml-3">
      <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md w-1/3">
        <img src="https://img.icons8.com/?size=100&id=11925&format=png&color=000000" alt="Logo 1" className="mb-4" />
        <h2 className="text-xl font-semibold mb-2">FREE SHIPPING </h2>
        <p className="text-center">This is a description for the first div.</p>
      </div>

      <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md w-1/3">
        <img src="https://img.icons8.com/?size=100&id=63686&format=png&color=000000" alt="Logo 2" className="mb-4" />
        <h2 className="text-xl font-semibold mb-2">SECURE PAYMENT</h2>
        <p className="text-center">This is a description for the second div.</p>
      </div>

      <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md w-1/3">
        <img src="https://img.icons8.com/?size=100&id=15742&format=png&color=000000" alt="Logo 3" className="mb-4" />
        <h2 className="text-xl font-semibold mb-2">7-DAYS-RETURN</h2>
        <p className="text-center">This is a description for the third div.</p>
      </div>
      
    </div>
    </div>
  )
}

export default Categories
