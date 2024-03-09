import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Editor } from "@monaco-editor/react";
import Loader from "./loader/Loader";
import OpenAI from "openai";

const TaskContext = ({
  saveCodeChange,
  kodovi,
  odabrani,
  zadatak,
  rjesenja,
  setRjesenja,
  testCode,
  loaderActive,
  feedbackMessage,
}) => {
  //********************** */
  const [primjerIndeks, setPrimjerIndeks] = useState(0);
  //**************************** */
  return (
    <div className=" w-[90%] h-[98vh] m-[1vh] rounded-md static">
      <div className="flex">
        <div className="w-[48%] m-[1%] h-[80.9vh] rounded-md">
          <Editor
            theme="vs-dark"
            value={kodovi[odabrani]}
            language="cpp"
            onChange={(value) => saveCodeChange(value)}
          />
          {feedbackMessage && (
            <div className="bg-sky-600 text-slate-100 w-auto h-12 rounded-md p-2 absolute top-[60%] left-[33.33%] -translate-x-1/2 -translate-y-1/2">
              {feedbackMessage}
            </div>
          )}
          {loaderActive && (
            <div className="absolute top-[632px] left-[470px] size-20 grid justify-center">
              <Loader className="size-36 bg-slate-700 absolute top-1/2 left-1/2" />
              .
            </div>
          )}
          <button
            className="w-[33%] float-right rounded-md bg-blue-500 p-2 m-[1%] text-xl  text-white font-bold uppercase"
            onClick={() => testCode()}
          >
            Test Code
          </button>
        </div>
        <div className="w-[48%] m-[1%] h-[92%]  bg-slate-20 min-h-[92%]  rounded-md relative">
          <h2 className="w-[98%] mb-1 text-blue-500 font-bold uppercase">
            {zadatak.imeZadatka}
          </h2>
          <textarea
            className="w-[98%] rounded-2xl shadow-2xl max-h-[25vh] p-1 min-h-[25vh]"
            value={zadatak.tekstZadatka}
          />
          <h3 className="w-full mb-1  text-blue-500 font-bold uppercase">
            Task Conditions
          </h3>
          <textarea
            className="w-[98%] rounded-2xl mt-3 max-h-[25vh] shadow-2xl p-1 min-h-[25vh]"
            value={zadatak.usloviZadatka}
          />
          <h3 className="w-full mb-1  text-blue-500 font-bold uppercase">
            Test Examples
          </h3>
          <FaArrowRight
            className="float-right -translate-y-1/2 mt-3 -translate-x-1/2 mr-1 cursor-pointer hover:text-blue-500"
            onClick={() => {
              setPrimjerIndeks(primjerIndeks >= 2 ? 0 : primjerIndeks + 1);
            }}
          />
          <textarea
            className="w-[98%] shadow-2xl max-h-[25vh] p-1 min-h-[25vh] rounded-2xl"
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
