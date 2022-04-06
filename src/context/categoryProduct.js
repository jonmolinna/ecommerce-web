import React, { createContext, useReducer } from "react";

const initialState = {
  genero: "",
  categoryWoman: [],
};

const CategoryContext = createContext({
  genero: "",
  addToGenero: (genero) => "",
  addToCategoryWoman: (productMan) => [],
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
    case "ADD_CATEGORY_WOMAN": {
      console.log("Context", action.payload);
      return {
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

  function addToCategoryWoman(productWoman) {
    dispatch({
      type: "ADD_CATEGORY_WOMAN",
      payload: productWoman,
    });
  }

  return (
    <CategoryContext.Provider
      value={{ genero: state.genero, addToGenero, addToCategoryWoman }}
      {...props}
    />
  );
}

export { CategoryContext, CategoryProvider };
