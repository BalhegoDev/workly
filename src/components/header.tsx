"use client";

import { useRef, useEffect, useState, useContext } from "react";
import Image from "next/image";
import { MenuContext } from "@/contexts/openMenuContext";

export default function Header() {
  const menuRef = useRef<HTMLImageElement>(null);
  const menuAction = useContext(MenuContext);
  
  useEffect(() => {
    const menuElement = menuRef.current;
    const handleClick = () => {
      menuAction?.setIsOpen(prevState => prevState = true);
    };

    if (menuElement) {
      menuElement.addEventListener("click", handleClick);
    }

    return () => {
      if (menuElement) {
        menuElement.removeEventListener("click", handleClick);
      }
    };
  }, [menuAction?.isOpen]);

  return (
    <>
    <header className="p-4 bg-primaryBlue flex justify-around">
      <section className="flex items-center w-16 gap-2">
        <Image
          src="/logo.svg"
          width={40}
          height={40}
          alt="Logo da Workly"
        />
        <h1 className="text-white">Workly</h1>
      </section>
      <Image
        src="/Menu.svg"
        width={40}
        height={40}
        alt=""
        ref={menuRef}
        className="md:hidden"
      />
      <section className="hidden md:flex md:justify-between text-white md:items-center md:w-64">
        <a className="cursor-pointer" href="#">Seja anfitrião</a>
        <button style={{border:"thin solid white"}} className="p-2 cursor-pointer rounded-sm w-32">
          <a className="cursor-pointer" href="#">Login</a>
        </button>
      </section>
    </header>
    </>
  );
}
