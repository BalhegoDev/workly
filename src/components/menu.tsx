"use client";

import Image from "next/image";
import { useContext, useRef, useEffect } from "react";

import MenuInterface from "@/interfaces/menu.interface";
import { MenuContext } from "@/contexts/openMenuContext";

export default function Menu({ children, isOpen, className }: MenuInterface) {
  const setIsOpen = useContext(MenuContext)?.setIsOpen;
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleClose = () => {
      if (setIsOpen) setIsOpen(false);
    };

    const img = imageRef.current;
    if (img) img.addEventListener("click", handleClose);

    return () => {
      if (img) img.removeEventListener("click", handleClose);
    };
  }, [setIsOpen]);

  return (
    <section
      className={`bg-primaryBlue z-20 flex-col ${className}`}
      style={{
        display: isOpen ? "flex" : "none",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: "0px",
      }}
    >
      <header className="flex justify-end p-6">
        <Image
          src="/close.svg"
          width={20}
          height={20}
          alt="Saída do menu"
          ref={imageRef}
          className="cursor-pointer"
        />
      </header>
      {children}
    </section>
  );
}