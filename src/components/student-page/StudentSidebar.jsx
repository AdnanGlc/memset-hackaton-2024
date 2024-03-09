import React, { useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
//                                                       ispravniZadaci
const StudentSidebar = ({
  zadaci,
  odabrani,
  setOdabrani,
  ispravniZadaci,
  rjesenja,
}) => {
  return (
    <div className="w-40 h-[98vh] m-[1vh] bg-slate-300 rounded-md">
      <ul className="pt-8 grid items-center">
        {zadaci.map((zadatak, i) => {
          return (
            <li
              key={zadaci.id}
              className={` ${
                odabrani === i ? "border-2 border-black" : "border-none"
              } pl-2 bg-white m-1 rounded-md relative h-auto cursor-pointer`}
              onClick={() => setOdabrani(i)}
            >
              <p key={zadaci.id} className="text-sm">
                {zadatak.imeZadatka}
              </p>
              {ispravniZadaci[i] === true ? (
                <FaRegCircleCheck
                  className={`absolute top-1/2 -translate-y-1/2 right-1 ${
                    rjesenja[i].set === true && rjesenja[i].isp === true
                      ? "text-green-400"
                      : "text-slate-500"
                  }`}
                />
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StudentSidebar;
