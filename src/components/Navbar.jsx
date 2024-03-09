import React from 'react'
import { FaUserGraduate } from "react-icons/fa";
import logo from "./memset.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-16 w-[90%] ml-auto mr-auto pt-2">
      <img src={logo} alt="Logo" className="w-26 h-16 " /> {/* Adjusted size */}
       
      
        <div className="flex justify-around  items-center">
            <button className="hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md shadow-xl">Dashboard</button>
            <button className="hover:bg-blue-500 hover:text-white px-4 py-2 ml-5 rounded-md shadow-xl">Log out</button>

        </div>
    </div>
  )
}

export default Navbar
