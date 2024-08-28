"use client";

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => { },
});

export function ThemeContextProvider({
  children,
}: {
  children: any;
}): React.JSX.Element {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    console.log(savedTheme);
    setTheme(() => savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme!);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
