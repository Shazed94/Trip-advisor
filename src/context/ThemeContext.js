import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const themeReduce = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    default:
      return state;
  }
};

export function ThemeProperty({ children }) {
  const [state, dispatch] = useReducer(themeReduce, {
    color: "azure",
  });

  const changeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };
  return (
    <ThemeContext.Provider value={{ ...state, changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}
