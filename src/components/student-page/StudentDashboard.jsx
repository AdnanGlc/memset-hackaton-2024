import React, { useState } from "react";
import StudentSidebar from "./StudentSidebar";
import TaskContext from "./TaskContext";
import { Zadaci } from "../database/zadaci";
import Navbar from "../Navbar";

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
  const [rjesenja, setRjesenja] = useState([
    { isp: false, set: false },
    { isp: true, set: false },
    { isp: false, set: false },
    { isp: true, set: false },
    { isp: true, set: false },
    { isp: false, set: false },
    { isp: false, set: false },
    { isp: true, set: false },
  ]);
  const [trenutni, setTrenutni] = useState(0);
  const [zadaci, setZadaci] = useState(Zadaci);
  const [kodovi, setKodovi] = useState(
    new Array(zadaci.length).fill(defaultCode)
  );
  const [kod, setKod] = useState(kodovi[0]);
  const [odabrani, setOdabrani] = useState(1);
  const [ispravniZadaci, setIspravniZadaci] = useState(
    new Array(zadaci.length).fill(true)
  );

  const saveCodeChange = (value) => {
    let tempKodovi = kodovi.slice(); // Kopiramo niz kako bismo izbjegli mutiranje stanja
    tempKodovi[odabrani] = value;
    setKodovi(tempKodovi);
    setKod(value);
  };

  return (
    <>
    <Navbar/>
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
        setRjesenja={setRjesenja}
        trenutni={trenutni}
        setTrenutni={setTrenutni}
        rjesenja={rjesenja}
        saveCodeChange={saveCodeChange}
        kodovi={kodovi}
        odabrani={odabrani}
        zadatak={zadaci[odabrani]}
      />
    </div>
    </>
  );
};

export default StudentDashboard;
