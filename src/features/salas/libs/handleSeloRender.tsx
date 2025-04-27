import { Selo } from "../interfaces/Selos.interface";
import Image from "next/image";

export default function HandleSeloRender(selo: Selo) {
  
  const selosUtilizaveis = Object.keys(selo.selos)
    .filter((elem) => elem !== "confianca" ).filter(elem => elem !== "qualidade");

  return (
    <>
      {selosUtilizaveis.map((elem) => {
        const key = elem as keyof Selo;

        return (
         
            <Image
              key={elem}
              src={`/salas/${elem}.svg`}
              alt={`selo de ${elem}`}
              width={20}
              height={20}
            />
          
        );
      })}
    </>
  );
}
