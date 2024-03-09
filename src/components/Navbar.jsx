import React from 'react'
import logo from "./memset.png";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const location = useLocation();
  return (
    <div className="flex justify-between items-center h-16 w-[90%] ml-auto mr-auto pt-2">
      <img src={logo} alt="Logo" className="w-26 h-16 " /> {/* Adjusted size */}
       
      
        <div className="flex justify-around  items-center">
            {location.pathname !== "/dashboard" && <Link to="/dashboard"><button className="hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md shadow-xl">Dashboard</button></Link>}
           <Link to="/"><button className="hover:bg-blue-500 hover:text-white px-4 py-2 ml-5 rounded-md shadow-xl">Log out</button></Link> 

        </div>
    </div>
  )
}

export default Navbar
