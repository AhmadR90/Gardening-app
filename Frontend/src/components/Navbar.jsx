import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate=useNavigate()
  const navLinkClick=({isActive})=>{
    return{
      fontWeight:isActive ?"bold":"normal",
      textDecoration:isActive? "none":"underline"
    }
  }
  return (
    <>
      <div className="flex justify-around gap-4 space-x-96 bg-green-400 text-black p-5  h-20 ">
        <div className="h-12 w-16 gap-2 flex ">
          <img
            className="rounded-lg"
            src="https://i.pinimg.com/564x/6e/c6/e5/6ec6e5b60c9008b7e6dcdfca289666ae.jpg"
            alt="logo image"
          />
          <span className="flex text-center font-extrabold pt-3">
            DummyGarden
          </span>
        </div>

        <div className="flex  space-x-7 text-black font-semibold">
          <NavLink style={navLinkClick} to="/home">Home</NavLink>
          <NavLink  style={navLinkClick} to="/blog">Blog</NavLink>
          <NavLink style={navLinkClick}  to="/store">Store</NavLink>
          <button className="bg-white rounded-xl w-28" onClick={()=>{navigate("/")}}>Logout</button>
        </div>
        
      </div>
    
    </>
  );
};

export default Navbar;
