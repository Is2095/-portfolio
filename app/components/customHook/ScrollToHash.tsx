"use client";

import { useLayoutEffect } from "react";

interface ScrollToHashProps {
  smooth?: boolean; // opcional: permite elegir scroll suave o instantáneo
}

export default function ScrollToHash({ smooth = false }: ScrollToHashProps) {
  useLayoutEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
      }
    }
  }, [smooth]);

  return null;
}
