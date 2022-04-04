import React, { createContext, useReducer } from "react";

const initialState = {
  genero: "",
};

const CategoryContext = createContext({
  genero: "",
  addToGenero: (genero) => "",
});

function categoryReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_GENERO": {
      let genero = action.payload;
      return genero
        ? {
            ...state,
            genero,
          }
        : {
            ...state,
          };
    }
    default:
      return state;
  }
}

function CategoryProvider(props) {
  const [state, dispatch] = useReducer(categoryReducer, initialState);

  function addToGenero(genero) {
    dispatch({
      type: "ADD_TO_GENERO",
      payload: genero,
    });
  }

  return (
    <CategoryContext.Provider
      value={{ genero: state.genero, addToGenero }}
      {...props}
    />
  );
}

export { CategoryContext, CategoryProvider };
