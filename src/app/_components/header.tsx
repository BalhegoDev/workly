"use client";

import Image from "next/image"

export default function Header(){
    return(
        <header className="flex items-center justify-center gap-40 ">
        <section className="flex items-center justify-between w-36">
            <Image
                src={"/logo.svg"}
                alt="Logo da empresa"
                width={80}
                height={80}
            />
            <h1>
                Delta
            </h1>
        </section>
        <nav>
          <ul className="flex justify-between w-36">
            <li><a href="/register">Cadastro</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </header>
    )
}