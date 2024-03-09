import { Editor } from "@monaco-editor/react";
import React from "react";

const defaultCode = `
#include<iostream>
using namespace std;
int main()
{
  cout<<"Hello world";
  return 0;
}
`;

const TaskContext = () => {
  return (
    <div className="bg-slate-300 w-[90%] h-[98vh] m-[1vh] rounded-md static">
      <nav className="w-auto h-8 bg-white m-2 rounded-md flex justify-end gap-5 pr-5">
        <button>b1</button>
        <button>b2</button>
        <button>b3</button>
        <button>b4</button>
      </nav>
      {/* editor  i tekst*/}
      <div className="flex">
        {/* cpp editor */}
        <div className="w-[48%] m-[1%] h-[89vh] rounded-md">
          <Editor theme="vs-dark" value={defaultCode} language="cpp" />
        </div>
        <div className="w-[48%] m-[1%] h-[92%] min-h-[92%] rounded-md">
          <h2 className="w-[98%]">Naziv zadatka</h2>
          <textarea
            className="w-[98%] max-h-[25vh] p-1 min-h-[25vh]"
            value={"Test primjeri"}
          />
          <h3 className="w-full">Uslovi zadataka</h3>
          <textarea
            className="w-[98%] max-h-[25vh] p-1 min-h-[25vh]"
            value={"uslovi"}
          />
          <h3 className="w-full">Test primjeri</h3>
          <textarea
            className="w-[98%] max-h-[25vh] p-1 min-h-[25vh]"
            value={"test primjeri"}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskContext;
