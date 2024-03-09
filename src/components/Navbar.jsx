import React from 'react'
import { FaUserGraduate } from "react-icons/fa";
import logo from "./memset.png";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center h-16">
      <img src={logo} alt="Logo" className="w-26 h-16 mr-2" /> {/* Adjusted size */}
       
      
        <div className="flex justify-around items-center">
            <button className="hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md border-2">Log out</button>
            <FaUserGraduate className="ml-10 w-6 h-6 text-blue-600 "/>
        </div>
    </div>
  )
}

export default Navbar
