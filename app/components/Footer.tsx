import React from "react";
import { menuNavbar } from "@/app/constantes";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-dark/90 py-8 text-center text-sm mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-600 dark:text-[rgb(163,163,163)] text-center">
          Portfolio personal de Ismael Diaz · {new Date().getFullYear()}
        </p>
        <div className="flex gap-4 text-gray-600 dark:text-[rgb(163,163,163)]">
          {menuNavbar.map((item) => {
            return (
              <a key={item.href} href={item.href} className="hover:underline">
                {item.label}
              </a>
            );
          })}
          <a
            href="https://www.linkedin.com/in/ismael-diaz-3b440b27a/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Is2095"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
