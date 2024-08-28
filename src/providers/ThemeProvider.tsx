"use client";
import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export default function ThemeProvider({
  children,
}: Readonly<ThemeProviderProps>): React.JSX.Element {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={cn(
        theme.theme,
        "min-h-dvh min-w-full container bg-background",
      )}
    >
      {children}
    </div>
  );
}
