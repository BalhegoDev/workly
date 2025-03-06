"use client";

import { useContext } from "react";
import { MenuContext } from "@/contexts/openMenuContext";
import Image from "next/image";

//components
import Header from "@/components/header";
import Menu from "@/components/menu";


export default function Home(){

  const isOpen = useContext(MenuContext)?.isOpen;

  return (
    <>
      <Header/>
      <Menu isOpen={isOpen}>

      </Menu>
      <article className="relative flex flex-col bg-primaryBlue p-6">
        <div 
          className="absolute inset-0 bg-[url('/index/people-talking.png')] bg-cover bg-center opacity-10"
        />
        <p className="relative w-36 text-white z-10">
          Não se trata apenas de agendar reuniões,
          mas de escolher o espaço ideal para transformar cada encontro em um grande negócio.
        </p>
        <button className="flex text-white bg-secondaryBlue z-10 w-44 justify-evenly rounded-md border-none mt-4 cursor-pointer p-2">
          Agende seu espaço
          <Image
            width={15}
            height={15}
            alt="ícone ilustrativo"
            src="/index/moon.svg"
          />
        </button>
        <button className="z-10 border-2 border-white text-white w-28 justify-evenly rounded-md mt-4 cursor-pointer p-2">
          Saiba mais
        </button>
      </article>
      <article className="bg-primaryBlack flex flex-col">
          <p>
            <span className="text-textBlue">Nós temos o espaço ideal para você!</span>
            <span>Possuimos selos de confiança e qualidade, segurança e reembolso em até 1 hora antes do horário marcado.</span>
          </p>
          <section>
            <section className="flex flex-wrap">
              <Image
                width={80}
                height={80}
                alt="ícone de calendário"
                src="/index/iconCalendar.svg"
              />
            </section>
            <section>
              <Image
                width={80}
                height={80}
                alt="ícone de segurança"
                src="/index/iconsecurity.svg"
              />
            </section>
            <section>
              <Image
                width={80}
                height={80}
                alt="ícone de estrela"
                src="/index/iconstar.svg"
              />
            </section>
          </section>
      </article>
    </>
  );
}
