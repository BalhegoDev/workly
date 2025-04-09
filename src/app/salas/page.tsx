import Header from "@/components/header"
import { HandleRoomChoose } from "@/features/salas/libs/handleRoomChoose"

export default function Salas(){

    return(
        <>
            <Header/>
            <section className="bg-primaryBlue h-24 mb-5 flex items-center justify-center">
                <h2 className="text-white text-xl text-center">
                 Nossos espaços
                </h2>
            </section>
            <main>
                <header className=" flex flex-col">
                    <section className="flex justify-left ml-5  flex-wrap gap-2">
                        <HandleRoomChoose/> 
                        
                    </section>
                </header>
            </main>
        </>
    )
}