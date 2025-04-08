import Image from "next/image";

//components
import Header from "@/components/header";
import Menu from "@/components/menu";
import CardCaption from "@/components/cardCaption";
import CardSpace from "@/components/cardSpace";

export default function Home(){
  return (
    <>
      <Header/>
      <Menu>
      </Menu>
      <article className="relative md:h-screen md:justify-center md:items-center flex flex-col bg-primaryBlue p-6">
        <div
          className="absolute inset-0 bg-[url('/index/people-talking.png')] bg-cover bg-center opacity-10"
        />
        <p className="relative md:text-center md:w-96 w-36 text-white md:text-4xl z-10">
          Não se trata apenas de agendar reuniões,
          mas de escolher o espaço ideal para transformar cada encontro em um grande negócio.
        </p>
        <section className="z-10 md:w-80   md:flex md:justify-between ">
          <button className="flex text-white bg-secondaryBlue z-10 w-44 justify-evenly rounded-md border-none mt-4 cursor-pointer p-2">
            <a className="flex" href="/choose">
              Agende seu espaço
              <Image
                width={15}
                height={15}
                alt="ícone ilustrativo"
                src="/index/moon.svg"
              />
            </a>
          </button>
          <button className="z-10 border-2 border-white text-white w-28 justify-evenly rounded-md mt-4 cursor-pointer p-2">
            Saiba mais
          </button>
        </section>
      </article>
      <article className="relative bg-primaryBlack p-8 flex flex-col items-center">
        <div 
          className="absolute inset-0 bg-[url('/index/stars.jpg')] bg-cover bg-center opacity-10"
        />
        <p className="relative flex flex-col items-center text-left md:text-center mb-5 z-10">
          <span className="text-textBlue w-40 md:w-auto md:text-2xl">Nós temos o espaço ideal para você!</span>
          <span className="w-40 md:text-2xl md:w-80 text-white">
            Possuímos selos de confiança e qualidade, segurança e reembolso em até 1 hora antes do horário marcado.
          </span>
        </p>
        <section className=" md:flex md:gap-36 gap-10 z-10">
          <CardCaption className="h-36 mt-4" image="/index/iconCalendar.svg" title="Agendamento"/>
          <CardCaption className="h-36 mt-4" image="/index/iconsecurity.svg" title="Selo de confiança"/>
          <CardCaption className="h-36 mt-4" image="/index/iconstar.svg" title="Qualidade"/>
        </section>
      </article>
      <article className="bg-primaryBlue p-5 flex flex-col items-center text-white">
        <header className="flex flex-col items-center">
          <Image
            src="/arrownDown.svg"
            width={25}
            height={25}
            alt="Imagem de flecha para baixo."
          />
          <p className="text-2xl">
            Nossos outros selos:
          </p>
        </header>
        <section className="flex items-center pb-5 flex-wrap mt-5 justify-center gap-16">
          <CardCaption title="Iluminação" image="/index/iconlight.svg"/>
          <CardCaption title="Climatizado" image="/index/iconfreeze.svg"/>
          <CardCaption title="Tomadas" image="/index/iconplug.svg"/>
          <CardCaption title="Quadros" image="/index/iconslideshow.svg"/>
          <CardCaption title="Projetores/Telas" image="/index/iconprojector.svg"/>
        </section>
      </article>
      <article className="p-6 flex flex-col text-primaryBlue bg-white">
        <p className="text-3xl mb-10 text-center">Nossos espaços</p>
        <section className="flex justify-center flex-wrap gap-5">
          <CardSpace 
            label="Precisa de um lugar para trabalhar com foco e praticidade? Trabalhe com conforto e praticidade em estações individuais ou compartilhadas. Nosso espaço é ideal para quem busca um ambiente inspirador e bem estruturado para o dia a dia." 
            image="/index/idea.svg" 
            link="/salas?tipo_sala=coworking"
            title="Co-working"
          />
          <CardSpace 
            label="Reúna sua equipe em espaços modernos e equipados. Perfeito para brainstorms, apresentações e encontros importantes, com toda a comodidade para fazer sua reunião acontecer." 
            image="/index/reuniao.svg" 
            link="/salas?tipo_sala=reunioes"
            title="Reuniões"
            className="lg:h-24"
          />
          <CardSpace 
            label="Planejando um evento corporativo ou workshop? Oferecemos grandes espaços adaptáveis, ideais para receber seu público com conforto e estrutura profissional." 
            image="/index/meeting.svg"
            link="/salas?tipo_sala=BigSpaces"
            title="Grandes espaços"
          />
        </section>
      </article>
    </>
  );
}
