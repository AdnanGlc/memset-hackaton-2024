import React, { useState } from "react";
import Navbar from "../Navbar";
import Image from "./aibot.png";
import { IoSend } from "react-icons/io5";

const Learning = () => {
  const [textVisible, setTextvisible] = useState(true);
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center w-[70%] m-0 ml-auto mr-auto ">
        <img src={Image} alt="aibot" className="" />
        {textVisible && (
          <div className="">
            <p className="w-[90%] text-xl tracking-wider text-justify">
              Hello! Upon analyzing your code, we observed that you may benefit
              from gaining more knowledge about certain topics. Specifically, it
              seems you could enhance your understanding of array filtering and
              time complexity. Improving proficiency in these areas can
              significantly enhance your coding skills. Keep up the great work
              and continue learning!
            </p>
            <button
              className="mt-10 bg-blue-500 p-3 rounded-2xl text-center tracking-wider text-white hover:bg-sky-700"
              onClick={() => setTextvisible(false)}
            >
              Ask me something
            </button>
          </div>
        )}
        {!textVisible && (
          <div className="w-96 h-96 ml-10 bg-cyan-500 rounded-2xl relative opacity-50">
            <input
              placeholder="Ask me something"
              className="w-full absolute bottom-0 pl-2 pt-2 pb-2 border-2 border-cyan-500"
            />
            <IoSend className="absolute right-2 bottom-3.5" />
          </div>
        )}
      </div>
      <div>
        <h1>Related content</h1>
      </div>
      <div>
        <h1>Tasks</h1>
      </div>
    </>
  );
};

export default Learning;
