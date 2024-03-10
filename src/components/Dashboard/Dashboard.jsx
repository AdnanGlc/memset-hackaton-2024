import React, { useState, useEffect } from "react";
import { FaBrain, FaBookOpen, FaTasks } from "react-icons/fa";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";


const Dashboard = () => {
  const [buttonsVisible, setButtonsVisible] = useState([false, false, false]);
  useEffect(() => {
    const timers = [
      setTimeout(() => {
        setButtonsVisible(prevState => [true, prevState[1], prevState[2]]);
      }, 0),
      setTimeout(() => {
        setButtonsVisible(prevState => [prevState[0], true, prevState[2]]);
      }, 500),
      setTimeout(() => {
        setButtonsVisible(prevState => [prevState[0], prevState[1], true]);
      }, 1000)
    ];

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col mt-40 items-center justify-center h-full w-full">
      <h1 className=" text-center text-4xl mb-20 uppercase font-bold">What are we doing today?</h1>

        <div className="grid grid-cols-3 gap-16">
            <Link to="/tasks">
          <button className={`bg-blue-400 text-white size-80 rounded-2xl text-4xl shadow-2xl  transition-transform hover:scale-110 hover:shadow-2xl delay-100 ${buttonsVisible[0] ? 'opacity-100' : 'opacity-0'}`} >
            <FaBookOpen className="w-full text-center size-10" />
            Exam
          </button>
          </Link>
          <Link to="/exam">

          <button className={`bg-blue-700 text-white size-80 rounded-2xl text-4xl shadow-2xl  transition-transform hover:scale-110 hover:shadow-2xl delay-100 ${buttonsVisible[1] ? 'opacity-100' : 'opacity-0'}`}>
            <FaTasks className="w-full text-center size-10" />
            Tasks
          </button>
          </Link>
          <Link to="/learning">

          <button className={`bg-blue-600 text-white size-80 rounded-2xl text-4xl  transition-transform hover:scale-110 hover:shadow-2xl delay-100 ${buttonsVisible[2] ? 'opacity-100' : 'opacity-0'}`}>
            <FaBrain className="w-full text-center size-10" />
            Learn with AI
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dashboard;