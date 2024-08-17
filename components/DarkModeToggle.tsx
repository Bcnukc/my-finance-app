"use client";

import useDarkMode, { Theme } from "@/ hooks/useDarkMode";
import Button from "./Button";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = ({ defaultTheme = "dark" as Theme }) => {
  const { theme, toggleTheme } = useDarkMode(defaultTheme);

  return (
    <Button variant="ghost" size="sm" onClick={toggleTheme}>
      {theme === "dark" ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </Button>
  );
};

export default DarkModeToggle;
