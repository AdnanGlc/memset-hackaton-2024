import React, { useEffect, useState } from "react";
import { odabraniZadatak, Zadaci } from "../database/zadaci";

const PostavkaZadatka = () => {
  const [odabraniZad, setOdabraniZad] = useState(odabraniZadatak);
  const [zadaci, setZadaci] = useState(Zadaci);
  console.log(odabraniZad);
  return (
    <>
      <div className="admin-zadaci w-[75%] bg-white h-auto min-h-[85%] pt-4 ml-5  flex flex-wrap">
        {zadaci.length > 0 && (
          <>
            <div className="ispit-trajanje ml-[2%] w-[96%] pl-2 pr-2">
              <button className="bg-gray-200">{odabraniZad.vidljivost}</button>
              <div>
                <p>Execution time:</p>
                <input
                  value={odabraniZad.vremenskoOgranicenje}
                  type="number"
                  min={1}
                  max={10000}
                  onChange={(e) =>
                    setOdabraniZad({
                      ...odabraniZad,
                      vremenskoOgranicenje: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <p>End:</p>
                <input
                  type="datetime-local"
                  value={odabraniZad.istekZadatka}
                  onchange={(e) => console.log(e.target.value)}
                />
              </div>
            </div>
            {/* --------------------tekst i uslovi zadatka zadatka-------------------- */}
            <div className="ml-[2%] w-[96%] bg-white h-auto border-slate-500 rounded-md">
              <h2 className="ml-[1%] mt-2 font-bold">Task name</h2>
              <input
                className="bg-white w-[98%] h-[auto] m-[1%] p-1"
                value={odabraniZad.imeZadatka}
                onChange={(e) =>
                  setOdabraniZad({ ...odabraniZad, imeZadatka: e.target.value })
                }
              ></input>
              <h2 className="ml-[1%] mt-2 font-bold">Description</h2>
              <textarea
                className=" bg-slate-100 w-[98%] h-[350px] m-[1%] p-1"
                value={odabraniZad.tekstZadatka}
                onChange={(e) =>
                  setOdabraniZad({
                    ...odabraniZad,
                    tekstZadatka: e.target.value,
                  })
                }
              ></textarea>
              <h2 className="ml-[1%] font-bold">Conditions</h2>
              <textarea
                className="bg-slate-100 w-[98%] h-[150px] m-[1%] p-1"
                value={odabraniZad.usloviZadatka}
                onChange={(e) =>
                  setOdabraniZad({
                    ...odabraniZad,
                    usloviZadatka: e.target.value,
                  })
                }
              ></textarea>
            </div>
            {/* --------------------Kod zadatka, primjeri inputa i outputa--------------------  */}
            <div className=" ml-[2%] w-[96%]   border-2 border-slate-500 rounded-md flex flex-wrap">
              <h2 className="ml-[2%] pt-2 w-[96%] font-bold">Correct code</h2>
              <textarea
                className="bg-slate-100 w-[100%] h-[550px] m-[1%] p-1"
                placeholder="Ovdje postavite ispravan kod zadatka"
                value={odabraniZad.kodZadatka}
                onChange={(e) =>
                  setOdabraniZad({ ...odabraniZad, kodZadatka: e.target.value })
                }
              ></textarea>
            </div>
            {/* .........inputi i outputi......... */}
            <h1 className="mt-10 text-2xl text-[#000000] font-bold w-[96%] pl-2 pr-2 m-auto">
              Examples
            </h1>
            <div className="primjeriInputa w-[96%] pl-2 pr-2 ">
              {odabraniZad.testPrimjeri &&
                odabraniZad.testPrimjeri.map((primjer, i) => {
                  return (
                    <div className="primjer" key={i}>
                      <h3>Primjer inputa {i + 1}</h3>
                      <textarea
                        placeholder=""
                        className="bg-blue-500"
                        value={primjer.ulaz}
                        onChange={(e) => {
                          let lista = odabraniZad.testPrimjeri.map((pr, j) => {
                            if (i === j) {
                              pr.ulaz = e.target.value;
                            }
                            return pr;
                          });
                          setOdabraniZad({
                            ...odabraniZad,
                            testPrimjeri: lista,
                          });
                        }}
                      ></textarea>

                      <h3>Primjer outputa {i + 1}</h3>
                      <textarea
                        placeholder=""
                        value={primjer.izlaz}
                        onChange={(e) => {
                          let lista = odabraniZad.testPrimjeri.map((pr, j) => {
                            if (i === j) {
                              pr.izlaz = e.target.value;
                            }
                            return pr;
                          });
                          setOdabraniZad({
                            ...odabraniZad,
                            testPrimjeri: lista,
                          });
                        }}
                      ></textarea>
                    </div>
                  );
                })}
              <div
                className="primjer"
                onClick={() => {
                  setOdabraniZad({
                    ...odabraniZad,
                    testPrimjeri: [
                      ...odabraniZad.testPrimjeri,
                      { ulaz: "", izlaz: "" },
                    ],
                  });
                }}
              >
                Add New input
              </div>
            </div>

            <h1 className="mt-10 text-2xl text-[#000000] font-bold w-[96%] pl-2 pr-2 m-auto">
              Hidden examples
            </h1>
            <div className="primjeriInputa w-[96%] pl-2 pr-2 ">
              {odabraniZad.testPrimjeri &&
                odabraniZad.skriveniTestPrimjeri.map((primjer, i) => {
                  return (
                    <div className="primjer" key={i}>
                      <h3>Input example {i + 1}</h3>
                      <textarea
                        placeholder=""
                        value={primjer.ulaz}
                        onChange={(e) => {
                          let lista = odabraniZad.skriveniTestPrimjeri.map(
                            (pr, j) => {
                              if (i === j) {
                                pr.ulaz = e.target.value;
                              }
                              return pr;
                            }
                          );
                          setOdabraniZad({
                            ...odabraniZad,
                            skriveniTestPrimjeri: lista,
                          });
                        }}
                      ></textarea>

                      <h3>Output example {i + 1}</h3>
                      <textarea
                        placeholder=""
                        value={primjer.izlaz}
                        onChange={(e) => {
                          let lista = odabraniZad.skriveniTestPrimjeri.map(
                            (pr, j) => {
                              if (i === j) {
                                pr.izlaz = e.target.value;
                              }
                              return pr;
                            }
                          );
                          setOdabraniZad({
                            ...odabraniZad,
                            skriveniTestPrimjeri: lista,
                          });
                        }}
                      ></textarea>
                    </div>
                  );
                })}
              <div
                className="primjer"
                onClick={() => {
                  setOdabraniZad({
                    ...odabraniZad,
                    skriveniTestPrimjeri: [
                      ...odabraniZad.skriveniTestPrimjeri,
                      { ulaz: "", izlaz: "" },
                    ],
                  });
                }}
              >
                Add New input
              </div>
            </div>

            <div className="buttons m-[2%] w-[98%] rounded-md flex justify-end p-2">
              <button
                className="delete text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={() => {
                  let lista = zadaci.filter(
                    (zad) => zad.zadatakID !== odabraniZad.zadatakID
                  );
                  setZadaci([...lista]);
                  console.log(lista);
                  if (lista.length !== 0) {
                    setOdabraniZad(lista[lista.length - 1]);
                  } else {
                    setOdabraniZad({});
                  }
                  // }else{
                  //   setOdabraniZad({ zadatakID: "",
                  //   imeZadatka: "",
                  //   tekstZadatka:
                  //     "",
                  //   usloviZadatka:
                  //     "",
                  //   slika: "",
                  //   podudarnost: "",
                  //   vidljivost: "",
                  //   vremenskoOgranicenje: "", //ms
                  //   istekZadatka: "",
                  //   testPrimjeri: [

                  //   ],
                  //   skriveniTestPrimjeri: [

                  //   ],})
                  // }
                }}
              >
                Delete
              </button>
              <button
                className="update text-sm px-5 py-2.5 text-white text-center mr-2 mb-2"
                onClick={() => {
                  let lista = zadaci.map((zad, i) => {
                    if (i == parseInt(odabraniZad.zadatakID) - 1) {
                      zad = odabraniZad;
                    }
                    return zad;
                  });
                  setZadaci(lista);
                  setOdabraniZad(odabraniZad);
                }}
              >
                Update
              </button>
            </div>
          </>
        )}
        {zadaci.length == 0 && (
          <h1 className="w-full text-center uppercase text-2xl">
            Napravite zadatak da biste mogli uređivati!
          </h1>
        )}
      </div>
    </>
  );
};

export default PostavkaZadatka;
