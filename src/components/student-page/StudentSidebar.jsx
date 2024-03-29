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
    <div className="w-40 h-[98vh] m-[1vh]  rounded-md shadow-inner">
      <ul className="pt-8 grid items-center">
        <p className="pl-2 mb-2 text-xl text-blue-500 font-bold uppercase">
          Tasks
        </p>

        {zadaci.map((zadatak, i) => {
          return (
            <li
              key={zadaci.id}
              className={` ${
                odabrani === i ? "bg-blue-400 text-white p-3 " : "border-none"
              } pl-2 m-1 rounded-md p-3 relative  h-auto cursor-pointer shadow-md`}
              onClick={() => setOdabrani(i)}
            >
              <p key={zadaci.id} className="text-sm">
                {zadatak.imeZadatka}
              </p>
              {ispravniZadaci[i] === true ? (
                <FaRegCircleCheck
                  className={`absolute top-1/2 -translate-y-1/2 right-1 rounded-full text-slate-600 ${
                    rjesenja[i] === true
                      ? "bg-green-500  rounded-full"
                      : "bg-slate-400"
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
