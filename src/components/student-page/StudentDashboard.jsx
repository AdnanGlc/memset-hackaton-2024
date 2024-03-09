import React, { useState } from "react";
import StudentSidebar from "./StudentSidebar";
import { Zadaci } from "../database/zadaci";
import TaskContext from "./TaskContext";
import axios from "axios";
import { OpenAI } from "openai";

const defaultCode = `
#include<iostream>
using namespace std;
int main()
{
  cout<<"Hello world";
  return 0;
}
`;
const apiKey = "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";
//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
const StudentDashboard = () => {
  const openai = new OpenAI(
    `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`
  );

  async function main() {
    const message = await openai.beta.threads.messages.retrieve(
      "thread_abc123",
      "msg_abc123"
    );

    console.log(message);
  }

  const [zadaci, setZadaci] = useState(Zadaci);
  const [kodovi, setKodovi] = useState(
    new Array(zadaci.length).fill(defaultCode)
  );
  const [kod, setKod] = useState(kodovi[0]);
  const [odabrani, setOdabrani] = useState(1);
  const [ispravniZadaci, setIspravnizadaci] = useState(
    new Array(zadaci.length).fill(true)
  );

  const saveCodeChange = (value) => {
    let tempKodovi = kodovi;
    tempKodovi[odabrani] = value;
    setKodovi(tempKodovi);
    setKod(value);
  };

  return (
    <div className="flex">
      <StudentSidebar
        zadaci={zadaci}
        odabrani={odabrani}
        setOdabrani={setOdabrani}
        ispravniZadaci={ispravniZadaci}
      />
      <TaskContext
        saveCodeChange={saveCodeChange}
        kodovi={kodovi}
        odabrani={odabrani}
        zadatak={zadaci[odabrani]}
      />
      <button
        className="absolute top-1/2 left-1/2 size-11 bg-red-600"
        onClick={() => main()}
      >
        API
      </button>
    </div>
  );
};

export default StudentDashboard;
