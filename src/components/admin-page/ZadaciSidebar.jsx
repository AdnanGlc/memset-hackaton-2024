import React, { useState, useEffect } from "react";
import "./admin.css";
import { MdAddCircle } from "react-icons/md";
import { Zadaci } from "../database/zadaci";
import { odabraniZadatak } from "../database/zadaci";

const ZadaciSidebar = () => {
  const [zadaci, setZadaci] = useState(Zadaci);
  const [odabraniZad, setOdabraniZadatak] = useState(odabraniZadatak);
  useEffect(() => {
    if (zadaci.length > 0) {
      setOdabraniZadatak(zadaci[0]);
    }
  }, []);
  return (
    <div className="sidebar  md:w-[15%] h-full md:h-[85vh] m-5 rounded-md border-1 pt-3 pb-11 flex flex-wrap justify-center">
      <div className="zadaci">
        <p>Tasks:</p>
        <MdAddCircle
          className="add"
          onClick={() => {
            setZadaci([
              ...zadaci,
              {
                zadatakID: zadaci.length + 1,
                imeZadatka: "",
                tekstZadatka: "",
                usloviZadatka: "",
                slika: "",
                podudarnost: "",
                vidljivost: "Nevidljiv",
                vremenskoOgranicenje: "", //ms
                istekZadatka: "",
                testPrimjeri: [],
                skriveniTestPrimjeri: [],
              },
            ]);
          }}
        ></MdAddCircle>
      </div>
      <input
        placeholder="Pretrazi..."
        className=" bg-white rounded-md pl-3 mt-1 md:w-[90%] p-1 w-full border-none"
      />
      <ul className="border-slate-500 mt-3 w-full md:w-[90%] rounded-md h-[85%]">
        {zadaci.length == 0 && (
          <h1 className="text-center uppercase text-white">No tasks!</h1>
        )}
        {zadaci.map((zadatak) => {
          return (
            <li
              className={
                zadatak.zadatakID === odabraniZad.zadatakID
                  ? "mt-3 flex bg-[#4944d6] text-white p-2 rounded-md hover:opacity-70 relative border-2 border-white"
                  : "mt-3 flex bg-white p-2 rounded-md hover:opacity-70 relative"
              }
              onClick={() => {
                setOdabraniZadatak(zadatak);
              }}
            >
              {zadatak.imeZadatka}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ZadaciSidebar;
