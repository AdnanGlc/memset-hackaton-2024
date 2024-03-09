import React from 'react'
import { FaUserGraduate } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className="flex justify-around items-center h-16">
        <h2>Memset()</h2>
        <div className="flex justify-around items-center">
        <button>Log out</button>
        <FaUserGraduate className="ml-10 w-6 h-6 text-blue-600 "/>
        </div>
    </div>
  )
}

export default Navbar