import React, { useState } from "react";
import StudentSidebar from "./StudentSidebar";
import TaskContext from "./TaskContext";
import { Zadaci } from "../database/zadaci";
import Navbar from "../Navbar";
import OpenAI from "openai";
import { useEffect } from "react";

const defaultCode = `
#include<iostream>
using namespace std;
int main()
{
  cout<<"Hello world";
  return 0;
}
`;

const StudentDashboard = () => {
  const clearFeedbackMessage = () => {
    setFeedbackMessage("");
  };

  const [loaderActive, setLoaderActive] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  useEffect(() => {
    if (feedbackMessage) {
      const timeoutId = setTimeout(clearFeedbackMessage, 4000); // Clear message after 4 seconds
      return () => clearTimeout(timeoutId);
    }
  }, [feedbackMessage]);

  const [trenutni, setTrenutni] = useState(0);
  const [zadaci, setZadaci] = useState(Zadaci);
  const [kodovi, setKodovi] = useState(
    new Array(zadaci.length).fill(defaultCode)
  );
  const [confetti, setConfetti] = useState(false);
  const [rjesenja, setRjesenja] = useState(
    new Array(zadaci.length).fill(false)
  );
  const [odabrani, setOdabrani] = useState(1);
  const [ispravniZadaci, setIspravniZadaci] = useState(
    new Array(zadaci.length).fill(true)
  );

  const saveCodeChange = (value) => {
    let tempKodovi = kodovi.slice(); // Kopiramo niz kako bismo izbjegli mutiranje stanja
    tempKodovi[odabrani] = value;
    setKodovi(tempKodovi);
  };
  //****API************** */
  const api1 = "";
  const openai = new OpenAI({
    apiKey: api1,
    dangerouslyAllowBrowser: true, // This is the default and can be omitted
  });
  async function testCode() {
    setFeedbackMessage("ma kraljuuu uradio si top");
  
    setLoaderActive(true);
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `tekst zadataka:${zadaci[odabrani].tekstZadatka},Uslovi zadataka:${zadaci[odabrani].usloviZadatka},kod:${kodovi[odabrani]} Odgovori samo sa "DA" ili "NE" da li kod ispunjava uslove zadatka,da li bi kod dao ispravan ispis kada bi se pokrenuo, ako je odgovor ne obrazlozi u najvise 10 rijeci`,
        },
      ],
      model: "gpt-4-turbo-preview",
    });
    setLoaderActive(false);
    console.log(chatCompletion);
    if (chatCompletion.choices[0].message.content === "DA") {
      setConfetti(true);
      setTimeout(()=>setConfetti(false),5000)
      let tempRjesenja = rjesenja;
      tempRjesenja[odabrani] = true;
      setRjesenja(tempRjesenja);
    } else {
      let tempRjesenja = rjesenja;
      tempRjesenja[odabrani] = false;
      setRjesenja(tempRjesenja);
      setFeedbackMessage(chatCompletion.choices[0].message.content);
    }
  }
  //********************* */
  return (
    <>
      <Navbar />
      <div className="flex">
        <StudentSidebar
          trenutni={trenutni}
          setTrenutni={setTrenutni}
          zadaci={zadaci}
          odabrani={odabrani}
          setOdabrani={setOdabrani}
          ispravniZadaci={ispravniZadaci}
          rjesenja={rjesenja}
        />
        <TaskContext
          loaderActive={loaderActive}
          testCode={testCode}
          trenutni={trenutni}
          setTrenutni={setTrenutni}
          saveCodeChange={saveCodeChange}
          kodovi={kodovi}
          odabrani={odabrani}
          zadatak={zadaci[odabrani]}
          rjesenja={rjesenja}
          feedbackMessage={feedbackMessage}
          confetti={confetti}
        />
      </div>
    </>
  );
};

export default StudentDashboard;
