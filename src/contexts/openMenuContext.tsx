"use client";

import { createContext, useState, ReactNode } from "react";

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuContext = createContext<{ isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>> } | undefined>(undefined);

export default function MenuProvider({ children }: MenuProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
}