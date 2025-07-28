"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import { secciones_para_ver_scroll } from "@/app/constantes";

type SectionId = (typeof secciones_para_ver_scroll)[number];

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          const elementId = entry.target.id;

          if (elementId && secciones_para_ver_scroll.includes(elementId as SectionId)) {
            const newActive = `#${elementId}`;

            if (newActive !== activeSection) {
              setActiveSection(newActive);
            }
          }
        }
      });
    },
    [activeSection]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    observerRef.current = observer;

    const sections = secciones_para_ver_scroll.map((id) => {
      const element = document.getElementById(id);
      return element;
    }).filter(Boolean) as HTMLElement[];

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        sections.forEach((section) => {
          if (section) {
            observerRef.current?.unobserve(section);
          }
        });
      }
    };
  }, [handleIntersection]);

  return activeSection;
};

export default useActiveSection;
