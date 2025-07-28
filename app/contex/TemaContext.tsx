"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Tema = "light" | "dark";

interface TemaContextType {
  tema: Tema;
  toggleTema: () => void;
  setTema: (tema: Tema) => void;
}

const TemaContext = createContext<TemaContextType | undefined>(undefined);
export const TemaProvider = ({ children }: { children: React.ReactNode }) => {
  const [tema, setTemaState] = useState<Tema>("light");
  const [montado, setMontado] = useState(false);

  // actualizar el Tema
  const setTema = (nuevoTema: Tema) => {
    setTemaState(nuevoTema);
    localStorage.setItem("tema", nuevoTema);
    document.documentElement.classList.toggle("dark", nuevoTema === "dark");
  };
  // cambiar el Tema
  const toggleTema = () => {
    setTema(tema === "light" ? "dark" : "light");
  };

  // initialize theme
  useEffect(() => {
    const guardarTema = localStorage.getItem("tema") as Tema | null;
    const temaDelSistema = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialTheme = guardarTema || temaDelSistema;
    setTemaState(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    setMontado(true);
  }, []);

  // prevenir el destello al montar el elemento
  if (!montado) {
    return null;
  }
  return (
    <TemaContext.Provider value={{ tema, setTema, toggleTema }}>
      {children}
    </TemaContext.Provider>
  );
};

export function useTema() {
  const context = useContext(TemaContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a themeProvider");

  return context;
}
