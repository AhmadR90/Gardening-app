import React from 'react'
// import NavLink from "react-router-dom"
const Navbar = () => {
  return (
    <>
    <div className='flex justify-around gap-4 space-x-96 bg-green-500 p-5  h-20  ' >
        <div className='h-12 w-16 gap-2 flex '><img className='rounded-lg' src="https://i.pinimg.com/564x/6e/c6/e5/6ec6e5b60c9008b7e6dcdfca289666ae.jpg"  alt="logo image" />
        <span className='flex text-center font-extrabold pt-3'>DummyGarden</span>
        </div>
       
      
      <div className='flex  space-x-7 text-black font-semibold hover:text-blue-500'>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/Blog">Blog</a>
      </div>
    </div>
    </>
  )
}

export default Navbar
