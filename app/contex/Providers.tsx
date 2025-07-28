"use client";
import { TemaProvider } from "./TemaContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <TemaProvider>{children}</TemaProvider>;
}
