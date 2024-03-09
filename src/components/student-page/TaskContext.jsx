import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Editor } from "@monaco-editor/react";
import Loader from "./loader/Loader";

const TaskContext = ({
  saveCodeChange,
  kodovi,
  odabrani,
  zadatak,
  rjesenja,
  setRjesenja,
}) => {
  const [loaderActive, setLoaderActive] = useState(false);
  const [toogle, setToogle] = useState(false);

  const testiraj = () => {
    setLoaderActive(true);
  };

  useEffect(() => {
    if (loaderActive) {
      const delay = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;
      setTimeout(() => {
        let tempRjesenja = [...rjesenja]; // Napravite kopiju niza rjesenja
        tempRjesenja[odabrani].isp = toogle;
        tempRjesenja[odabrani].set = true;
        setRjesenja(tempRjesenja);
        setToogle(!toogle);
        setLoaderActive(false);
      }, delay);
    }
  }, [loaderActive, odabrani, rjesenja, setRjesenja, toogle]);

  const [primjerIndeks, setPrimjerIndeks] = useState(0);

  return (
    <div className="bg-slate-300 w-[90%] h-[98vh] m-[1vh] rounded-md static">
      <nav className="w-auto h-8 bg-white m-2 rounded-md flex justify-end gap-5 pr-5">
        <button>b1</button>
        <button>b2</button>
        <button>b3</button>
        <button>b4</button>
      </nav>
      <div className="flex">
        <div className="w-[48%] m-[1%] h-[82.9vh] rounded-md">
          <Editor
            theme="vs-dark"
            value={kodovi[odabrani]}
            language="cpp"
            onChange={(value) => saveCodeChange(value)}
          />
          {loaderActive && (
            <div className="absolute top-[632px] left-[470px] size-20 grid justify-center">
              <Loader className="size-36 bg-slate-700 absolute top-1/2 left-1/2" />
              .
            </div>
          )}
          <button
            className="w-[98%] rounded-md bg-white m-[1%] text-xl h-7 hover:bg-slate-800 hover:text-slate-100"
            onClick={testiraj}
          >
            Testiraj kod
          </button>
        </div>
        <div className="w-[48%] m-[1%] h-[92%] min-h-[92%] rounded-md relative">
          <h2 className="w-[98%] mb-1">{zadatak.imeZadatka}</h2>
          <textarea
            className="w-[98%] max-h-[25vh] p-1 min-h-[25vh]"
            value={zadatak.tekstZadatka}
          />
          <h3 className="w-full mb-1">Uslovi zadataka</h3>
          <textarea
            className="w-[98%] max-h-[25vh] p-1 min-h-[25vh]"
            value={zadatak.usloviZadatka}
          />
          <h3 className="w-full mb-1">Test primjeri</h3>
          <FaArrowRight
            className="float-right -translate-y-1/2 -translate-x-1/2 mr-1 cursor-pointer hover:text-blue-500"
            onClick={() => {
              setPrimjerIndeks(primjerIndeks >= 2 ? 0 : primjerIndeks + 1);
            }}
          />
          <textarea
            className="w-[98%] max-h-[25vh] p-1 min-h-[25vh]"
            value={
              "Ulaz: " +
              zadatak.testPrimjeri[primjerIndeks].ulaz +
              "\n\nIzlaz:\n" +
              zadatak.testPrimjeri[primjerIndeks].izlaz
            }
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TaskContext;
