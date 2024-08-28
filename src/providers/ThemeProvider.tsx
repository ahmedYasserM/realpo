"use client";
import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export default function ThemeProvider({
  children,
}: Readonly<ThemeProviderProps>): React.JSX.Element {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={`${theme.theme} min-h-screen`}
      style={{ backgroundColor: "var(--mantle)" }}
    >
      {children}
    </div>
  );
}
