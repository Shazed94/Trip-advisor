import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function useCustomization() {
  const context = useContext(ThemeContext);
  return context;
}
