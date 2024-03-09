import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Image from "./aibot.png";
import { IoSend } from "react-icons/io5";
import { FaThumbsUp } from "react-icons/fa6";
import { FaThumbsDown } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";

const linkovi = [
  { url: "https://www.geeksforgeeks.org/", name: "Geeks for Geeks" },
  {
    url: "https://clementmihailescu.github.io/Pathfinding-Visualizer/",
    name: "Pathfinding visualizer",
  },
  { url: "https://algorithm-visualizer.org/", name: "Algorithm Visualizer" },
  { url: "https://www.youtube.com/@TheCodingTrain", name: "The Codinng Train" },
  { url: "https://www.youtube.com/@abdul_bari", name: "Abdul Bari" },
];

const Learning = () => {
  const [textVisible, setTextVisible] = useState(true);
  const [linksVisible, setLinksVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    if (textVisible) {
      // Postavljanje vidljivosti linkova jedan po jedan sa razmakom od 100ms
      linkovi.forEach((link, index) => {
        setTimeout(() => {
          setLinksVisible((prevState) => ({ ...prevState, [index]: true }));
          setButtonVisible(true);
        }, index * 200);
      });
    }
  }, [textVisible]);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center w-[100%] m-0 ml-auto mr-auto">
        <img
          src={Image}
          alt="aibot"
          className="absolute size-96 left-2 top-2"
        />
        {textVisible && (
          <div className="ml-48">
            <p className="w-[90%] text-xl tracking-wider text-justify shadow-lg rounded-md p-2">
              Hej IB220016, naš sistem umjetne intaligencije je primjetio da
              imaš poteškoća sa: Algoritmima i optimizacijom
              <br /> Zbog toga smo Vam preporučili slijedeći prilagođen sadržaj,
              sretno učenje
            </p>
            <div className="m-5 grid gap-y-5 text-xl transition-all delay-500 justify-items-center">
              {linkovi.map((link, i) => (
                <a
                  target="blank"
                  key={i}
                  href={link.url}
                  className={`hover:text-blue-400 shadow-md w-64 text-center
                   delay-500 bg-slate-100 hover:shadow-inner rounded-md ${
                     linksVisible[i] ? "visible" : "invisible"
                   }`}
                  style={{
                    transitionDelay: `${i * 100}ms`,
                  }}
                >
                  {link.name}
                </a>
              ))}
              <button
                className={`${
                  buttonVisible ? "visible" : "invisible"
                }  delay-[1500ms] mt-10 bg-blue-500 p-3 rounded-2xl text-center tracking-wider text-white hover:bg-sky-700`}
                onClick={() => setTextVisible(false)}
              >
                Learn even more from me!
              </button>
            </div>
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
      <div className="bg-slate-100 h-[250px]">
        <h1 className="m-10 text-bold">Back To Tasks !!!</h1>
        <p className="ml-5">
          If you have learnd from preavious links you should be able to solve
          these tasks now...{" "}
        </p>
        <ul className="flex m-10">
          <li
            className={` pl-2 bg-white m-1 rounded-md relative h-auto cursor-pointer w-32`}
          >
            <p> Duplikati </p>
            <FaRegCircleCheck
              className={`absolute top-1/2 -translate-y-1/2 right-1 text-slate-800 shadow-xl`}
            />
          </li>
          <li
            className={` pl-2 bg-white m-1 rounded-md relative h-auto cursor-pointer w-32`}
          >
            <p> Otoci </p>
            <FaRegCircleCheck
              className={`absolute top-1/2 -translate-y-1/2 right-1 text-slate-800 shadow-xl`}
            />
          </li>
          <li
            className={` pl-2 bg-white m-1 rounded-md relative h-auto cursor-pointer w-32`}
          >
            <p> Labirint </p>
            <FaRegCircleCheck
              className={`absolute top-1/2 -translate-y-1/2 right-1 text-slate-800 shadow-xl`}
            />
          </li>
        </ul>
      </div>
      <div className="w-full flex gap-4 justify-end">
        <h2>Did you like the content</h2>
        <FaThumbsDown className="cursor-pointer text-blue-700 hover:text-blue-950 size-8" />
        <FaThumbsUp className="cursor-pointer text-blue-700 hover:text-blue-400 size-8 mr-2" />
      </div>
    </>
  );
};

export default Learning;
