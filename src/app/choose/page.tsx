import Header from "@/components/header";
import CardSpace from "@/components/cardSpace";

export default function Choose() {
    return (
        <div className="relative bg-primaryBlue min-h-screen">
            <div 
                className="absolute inset-0 bg-[url('/choose/chooseBg.jfif')] bg-cover bg-center"
                style={{opacity:"0.15"}}
            />
            <Header />
            <main className="relative z-10 p-6 text-white">
                <article className="flex flex-col text-primaryBlue">
                    <p className="text-3xl mb-2 text-white text-center">Nossos espaços</p>
                    <section className="flex justify-center flex-wrap gap-5">
                    <CardSpace 
                        label="Precisa de um lugar para trabalhar com foco e praticidade? Trabalhe com conforto e praticidade em estações individuais ou compartilhadas. Nosso espaço é ideal para quem busca um ambiente inspirador e bem estruturado para o dia a dia." 
                        image="/choose/idea.svg" 
                        link="/salas?tipo_sala=coworking"
                        title="Co-working"
                        borderColor="white"
                        textColor="white"
                    />
                    <CardSpace 
                        label="Reúna sua equipe em espaços modernos e equipados. Perfeito para brainstorms, apresentações e encontros importantes, com toda a comodidade para fazer sua reunião acontecer." 
                        image="/choose/reuniao.svg" 
                        link="/salas?tipo_sala=reunioes"
                        title="Reuniões"
                        className="lg:h-24"
                        borderColor="white"
                        textColor="white"
                    />
                    <CardSpace 
                        label="Planejando um evento corporativo ou workshop? Oferecemos grandes espaços adaptáveis, ideais para receber seu público com conforto e estrutura profissional." 
                        image="/choose/meeting.svg"
                        link="/salas?tipo_sala=BigSpaces"
                        title="Grandes espaços"
                        borderColor="white"
                        textColor="white"
                    />
                    </section>
                </article>
            </main>
        </div>
    );
}