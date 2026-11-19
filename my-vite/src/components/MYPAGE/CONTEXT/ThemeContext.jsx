import { createContext, useState } from "react"; // 1. Quitar Children de aquí

const ThemeContext = createContext();
const initialTheme = "light";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (e) => {
    if (e.target.value === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const data = { theme, handleTheme };

  // 2. Usar 'children' en minúscula
  return (
    <ThemeContext.Provider value={data}>
      {children} 
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
export default ThemeContext;