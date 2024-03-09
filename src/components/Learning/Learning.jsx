import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Image from "./aibot.png";
import { IoSend } from "react-icons/io5";
import { FaThumbsUp } from "react-icons/fa6";
import { FaThumbsDown } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import OpenAI from "openai";

const linkovi = [
  { url: "https://www.geeksforgeeks.org/", name: "GEEKS FOR GEEKS" },
  {
    url: "https://clementmihailescu.github.io/Pathfinding-Visualizer/",
    name: "PATHFIND VISUALIZER",
  },
  { url: "https://algorithm-visualizer.org/", name: "ALGORITHM VISUALIZER" },
  { url: "https://www.youtube.com/@TheCodingTrain", name: "THE CODING TRAIN" },
  { url: "https://www.youtube.com/@abdul_bari", name: "ABDUL BARI" },
];

const Learning = () => {
  const api1 = "";
  const openai = new OpenAI({
    apiKey: api1,
    dangerouslyAllowBrowser: true,
  });

  async function getMessage() {
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Odgovori vezano za programiranje i ucenje programiranja: ${poruka}`,
        },
      ],
      model: "gpt-4",
    });
    return chatCompletion.choices[0].message.content;
  }
  const [odgovor, setOdgovor] = useState(null);
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

  //********** */
  const [poruka, setPoruka] = useState("");
  const HandleMessage = async () => {
    let tempOdgovor = await getMessage();
    setOdgovor(tempOdgovor);
  };
  /*********** */
  return (
    <>
      <Navbar />
      <div className="flex items-center mt-5 justify-center w-full">
        <img src={Image} alt="aibot" className="size-102 flex-none" />
        {textVisible && (
          <div className="">
            <p className="w-[90%] flex-start mt-10 bg-blue-500 text-white text-xl tracking-wider  shadow-lg rounded-md p-3 font-medium">
              Hey Adnan, our artificial intelligence system has noticed that
              you're having difficulty with: Algorithms and Optimization.
              Therefore, we've recommended the following customized content for
              you. Good luck with your learning!
            </p>
            <div className="mt-5 grid gap-y-5 text-xl transition-all delay-500 ">
              {linkovi.map((link, i) => (
                <a
                  target="blank"
                  key={i}
                  href={link.url}
                  className={`hover:text-blue-400 p-2 text-left
                   delay-500 ${linksVisible[i] ? "visible" : "invisible"}`}
                  style={{
                    transitionDelay: `${i * 100}ms`,
                  }}
                >
                  <FaCircleArrowRight className="inline mr-5" />
                  {link.url}
                </a>
              ))}
              <button
                className={`${
                  buttonVisible ? "visible" : "invisible"
                }   delay-[1500ms] mt-10 bg-blue-500 p-3 w-[40%] ml-auto mr-[60%] rounded-2xl text-center tracking-wider text-white hover:bg-sky-700 font-bold`}
                onClick={() => setTextVisible(false)}
              >
                Learn more from me!
              </button>
            </div>
          </div>
        )}
        {!textVisible && (
          <div className="w-96 h-96 ml-10 bg-blue-500 rounded-2xl relative opacity-80 delay-500">
            <p>{odgovor}</p>
            <input
              placeholder="Ask me something"
              className="w-full absolute bottom-0 pl-2 pt-2 pb-2 border-2 border-blue-500"
              onChange={(value) => {
                setPoruka(value);
                console.log(poruka);
              }}
            />
            <IoSend
              onClick={() => HandleMessage()}
              className="absolute right-2 bottom-3.5 cursor-pointer"
            />
            <IoMdClose
              className="absolute right-2 top-2 text-[40px] text-white cursor-pointer"
              onClick={() => setTextVisible(!textVisible)}
            />
          </div>
        )}
      </div>
      <div className="h-auto flex flex-col justify-center items-center">
        <h1 className="ml-10 mt-20 mb-10 text-2xl uppercase font-medium">
          Practice some projects to implement gained knowledge
        </h1>
        <ul className="flex justify-center flex-col items-center">
          <li
            className={` p-6 bg-white m-1 rounded-2xl relative h-auto cursor-pointer mb-5 w-[90%] shadow-2xl`}
          >
            <p className="uppercase font-bold text-blue-400 mb-1">
              {" "}
              Duplikati{" "}
            </p>
            <div className="flex items-center">
              <p>
                U nizu od n elemenata ispisati brojeve koji se dupliraju,
                korisnik unosi broj n, zatim n brojeva nakon čega se ispisuju
                brojevi koji se ponavljaju više od jednog puta", usloviZadatka:
                "Vremenska složenost mora biti manja od O(n)
              </p>
              <button className="bg-blue-500 px-10 py-2 rounded-lg text-white">
                Code
              </button>
            </div>
          </li>
          <li
            className={` p-6 bg-white m-1 rounded-2xl  relative h-auto cursor-pointer mb-5 w-[90%] shadow-2xl`}
          >
            <p className="uppercase font-bold text-blue-400 mb-1">
              {" "}
              Duplikati{" "}
            </p>
            <div className="flex items-center">
              <p>
                U nizu od n elemenata ispisati brojeve koji se dupliraju,
                korisnik unosi broj n, zatim n brojeva nakon čega se ispisuju
                brojevi koji se ponavljaju više od jednog puta", usloviZadatka:
                "Vremenska složenost mora biti manja od O(n)
              </p>
              <button className="bg-blue-400 px-10 py-2 rounded-lg text-white">
                Code
              </button>
            </div>
          </li>
          <li
            className={` p-6 bg-white m-1 rounded-2xl relative h-auto cursor-pointer mb-5 w-[90%] shadow-2xl`}
          >
            <p className="uppercase font-bold text-blue-400 mb-1">
              {" "}
              Duplikati{" "}
            </p>
            <div className="flex items-center">
              <p>
                U nizu od n elemenata ispisati brojeve koji se dupliraju,
                korisnik unosi broj n, zatim n brojeva nakon čega se ispisuju
                brojevi koji se ponavljaju više od jednog puta", usloviZadatka:
                "Vremenska složenost mora biti manja od O(n)
              </p>
              <button className="bg-blue-400 px-10 py-2 rounded-lg text-white">
                Code
              </button>
            </div>
          </li>
        </ul>
        <div className="mt-5 text-center">
          <h2>Was this suggestion helpful?</h2>
          <div className="flex justify-evenly my-5">
            <button className="shadow-2xl bg-blue-400 px-3 py-1 rounded-xl text-white">
              Yes
            </button>
            <button className="shadow-2xl bg-blue-400 px-3 py-1 rounded-xl text-white">
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Learning;
