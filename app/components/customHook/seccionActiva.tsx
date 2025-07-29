// "use client";
// import { useEffect, useState, useCallback, useRef } from "react";
// import { secciones_para_ver_scroll } from "@/app/constantes";

// type SectionId = (typeof secciones_para_ver_scroll)[number];

// const useActiveSection = () => {
//   const [activeSection, setActiveSection] = useState<string>("");
//   const observerRef = useRef<IntersectionObserver | null>(null);

//   const handleIntersection = useCallback(
//     (entries: IntersectionObserverEntry[]) => {
//       entries.forEach((entry: IntersectionObserverEntry) => {
//         if (entry.isIntersecting) {
//           const elementId = entry.target.id;

//           if (
//             elementId &&
//             secciones_para_ver_scroll.includes(elementId as SectionId)
//           ) {
//             const newActive = `#${elementId}`;

//             if (newActive !== activeSection) {
//               setActiveSection(newActive);
//               window.history.replaceState(null, "", newActive);
//             }
//           }
//         }
//       });
//     },
//     [activeSection]
//   );

//   useEffect(() => {
//     const observer = new IntersectionObserver(handleIntersection, {
//       threshold: 0,
//       rootMargin: "-20% 0px -60% 0px",
//     });

//     observerRef.current = observer;

//     const sections = secciones_para_ver_scroll
//       .map((id) => {
//         const element = document.getElementById(id);
//         return element;
//       })
//       .filter(Boolean) as HTMLElement[];

//     sections.forEach((section) => {
//       if (section) {
//         observer.observe(section);
//       }
//     });

//     return () => {
//       if (observerRef.current) {
//         observerRef.current.disconnect();
//         sections.forEach((section) => {
//           if (section) {
//             observerRef.current?.unobserve(section);
//           }
//         });
//       }
//     };
//   }, [handleIntersection]);

//   return activeSection;
// };

// export default useActiveSection;

/*
"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { secciones_para_ver_scroll } from "@/app/constantes";

type SectionId = (typeof secciones_para_ver_scroll)[number];

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastActiveRef = useRef<string>(""); // ← evita repetición de updates

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const visibleSections: { id: string; ratio: number }[] = [];

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id && secciones_para_ver_scroll.includes(id as SectionId)) {
            visibleSections.push({ id, ratio: entry.intersectionRatio });
          }
        }
      });

      if (visibleSections.length === 0) return;

      // Ordenamos por visibilidad (ratio) para tomar la más visible
      const mostVisible = visibleSections.sort((a, b) => b.ratio - a.ratio)[0];
      const newActive = `#${mostVisible.id}`;

      if (newActive !== lastActiveRef.current) {
        lastActiveRef.current = newActive;
        setActiveSection(newActive);
        window.history.replaceState(null, "", newActive); // actualiza URL sin recargar
      }
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0,
      rootMargin: "-40% 0px -40% 0px", 
    });

    observerRef.current = observer;

    const elements = secciones_para_ver_scroll
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [handleIntersection]);

  return activeSection;
};

export default useActiveSection;*/
"use client";
import { useEffect, useState, useRef } from "react";
import { secciones_para_ver_scroll } from "@/app/constantes";

type SectionId = (typeof secciones_para_ver_scroll)[number];

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const visibilityMap = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    const handleIntersections = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        const ratio = entry.intersectionRatio;

        // Solo consideramos secciones válidas
        if (secciones_para_ver_scroll.includes(id as SectionId)) {
          visibilityMap.current.set(id, ratio);
        }
      });

      // Elegimos la sección con mayor intersección
      const mostVisible = Array.from(visibilityMap.current.entries()).sort(
        (a, b) => b[1] - a[1]
      )[0];

      if (mostVisible) {
        const [id, ratio] = mostVisible;
        const newActive = `#${id}`;

        if (ratio > 0 && newActive !== activeSection) {
          setActiveSection(newActive);
          window.history.replaceState(null, "", newActive);
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersections, {
      threshold: Array.from({ length: 11 }, (_, i) => i / 10), // [0, 0.1, ..., 1]
      rootMargin: "0px 0px 0px 0px",
    });

    observerRef.current = observer;

    const sections = secciones_para_ver_scroll
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
      // visibilityMap.current.clear();
    };
  }, [activeSection]);

  return activeSection;
};

export default useActiveSection;