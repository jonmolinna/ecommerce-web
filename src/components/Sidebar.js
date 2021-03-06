import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { CategoryContext } from "../context/categoryProduct";

const Sidebar = () => {
  const [genero, setGenero] = useState("");
  let history = useHistory();
  const { addToGenero } = useContext(CategoryContext);
  let location = useLocation().pathname.split("/")[1];

  const handleClick = () => {
    if (location) {
      console.log("Hola Mundo");
    } else {
      history.push(`/${genero}`);
      addToGenero(genero);
    }
  };

  return (
    <div className="w-full bg-inherit">
      <div className="border border-gray-400 rounded-md p-2">
        <article>
          <h2 className="p-2 border-b border-gray-400 text-lg font-semibold">
            {location ? "Categoria" : "Genero"}
          </h2>
          <div className="">
            <div className="mt-2 flex flex-col">
              <p className="flex items-center">
                <input
                  type="radio"
                  id="mujer"
                  name="genero"
                  value="mujer"
                  onChange={(e) => setGenero(e.target.value)}
                  className="radio-genero"
                />
                <label htmlFor="mujer" className="lbl-genero"></label>
                Mujer
              </p>
              <p className="flex items-center mt-1">
                <input
                  type="radio"
                  id="hombre"
                  name="genero"
                  value="hombre"
                  onChange={(e) => setGenero(e.target.value)}
                  className="radio-genero"
                />
                <label htmlFor="hombre" className="lbl-genero"></label>
                Hombre
              </p>
            </div>
          </div>
          <button
            className="bg-pink-700 text-white w-full mt-2 p-1 rounded-md disabled:bg-pink-500"
            disabled={!genero}
            onClick={handleClick}
          >
            Aplicar
          </button>
        </article>
      </div>
    </div>
  );
};

export default Sidebar;
