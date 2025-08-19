"use client";

import { useLayoutEffect } from "react";

export default function ScrollToHash() { // componente funcional de react que puede recibe o no una props para manejar la animación del scroll
  useLayoutEffect(() => { // hook de React similar a useEffect, se ejecuta después de que React renderiza el DOM pero antes de que el navegador pinte la pantalla.
    const hash = window.location.hash; // se obtiene el hash (de la url si hay #....)

    if (hash) {
      const el = document.querySelector(hash); // si la url tiene hash lo busca 
      if (el) { 
        el.scrollIntoView(); // y si está el componente hace scroll al componente que indica el hash y en el caso de tener props se debe especifivar "el.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });""
      }
    }
  }, []);

  return null;
}
