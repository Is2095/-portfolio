"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { useTema } from "@/app/contex/TemaContext";
import useActiveSection from "@/app/components/customHook/seccionActiva";
import { menuNavbar } from "@/app/constantes";

const NavbarPage = () => {
  const { tema, toggleTema } = useTema();

  const activeSection = useActiveSection();

  const [isMenuOpen, setIsMenutOpen] = useState<boolean>(false);

  const toggleMenuCelu = () => {
    setIsMenutOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
      <div className="container max-w-full mx-auto px-4 lg:max-w-[90%] xl:max-w-[80%]">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            Portfolio
          </Link>

          <div className="hidden lg:flex items-center space-x-10">
            {menuNavbar.map((item) => {
              const isActive = activeSection === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`hover:text-primary transition-colors font-medium ${
                    isActive ? "text-primary" : ""
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <button
              onClick={toggleTema}
              className="p-2 rounded-lg hover:bg-gray-100 dark:text-white hover:text-primary dark:hover:bg-gray-800 transition-colors cursor-pointer"
            >
              {tema === "dark" ? (
                <FiSun className="w-5 h-5" />
              ) : (
                <FiMoon className="w-5 h-5" />
              )}
            </button>
          </div>
          <button
            onClick={toggleMenuCelu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer "
          >
            {isMenuOpen ? (
              <FiX className="w-5 h-5" />
            ) : (
              <FiMenu className="w-5 h-5" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="py-4 space-y-4">
              {menuNavbar.map((item, index) => {
                return (
                  <div key={index} onClick={toggleMenuCelu} className="px-4">
                    <a
                      href={item.href}
                      className={
                        "block py-2 hover:text-primary transition-colors"
                      }
                    >
                      {item.label}
                    </a>
                  </div>
                );
              })}
              <div>
                <button
                  onClick={toggleTema}
                  className="flex items-center py-2 hover:text-primary transition-colors"
                >
                  {tema === "dark" ? (
                    <>
                      <FiSun className="w-5 h-5 mr-2" /> Modo Claro
                    </>
                  ) : (
                    <>
                      <FiMoon className="w-5 h-5 mr-2" /> Modo Oscuro
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarPage;
