import { useState } from "react";
import { useCookies } from "react-cookie";

export type Theme = "dark" | "light";

const useDarkMode = (defaultTheme: Theme = "dark") => {
  const [theme, setTheme] = useState(defaultTheme);
  const [_, setCookie] = useCookies(["theme"]);

  const setAndSaveTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    setCookie("theme", newTheme);
  };

  const toggleTheme = () => {
    setAndSaveTheme(theme === "dark" ? "light" : "dark");
  };

  return { theme, toggleTheme };
};

export default useDarkMode;
