import React, { useState } from "react";
import StudentSidebar from "./StudentSidebar";
import { Zadaci } from "../database/zadaci";
import TaskContext from "./TaskContext";
//
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
  const [zadaci, setZadaci] = useState(Zadaci);

  const [kodovi, setKodovi] = useState(
    new Array(zadaci.length).fill(defaultCode)
  );
  const [kod, setKod] = useState(kodovi[0]);
  const [odabrani, setOdabrani] = useState(1);
  const saveCodeChange = (value) => {
    let tempKodovi = kodovi;
    tempKodovi[odabrani] = value;
    setKodovi(tempKodovi);
    setKod(value); //ne radi dok se ne napravi neka promjena na kodu
  };
  const [ispravniZadaci, setIspravnizadaci] = useState(
    new Array(zadaci.length).fill(true)
  );
  return (
    <div className="flex">
      <StudentSidebar
        zadaci={zadaci}
        odabrani={odabrani}
        setOdabrani={setOdabrani}
        ispravniZadaci={ispravniZadaci}
      />
      <TaskContext />
    </div>
  );
};

export default StudentDashboard;
