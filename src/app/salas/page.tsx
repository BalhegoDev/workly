import Header from "@/components/header"
import RoomChoose from "@/components/roomChoose"
import { useSearchParams } from "next/navigation"

export default function Salas(){
    const searchParams = useSearchParams();

    const handleChosenRoom = () => {
        
    }

    return(
        <>
            <Header/>
            <section className="bg-primaryBlue h-24 flex items-center justify-center">
                <h2 className="text-white text-xl text-center">
                 Nossos espaços
                </h2>
            </section>
            <main>
                <header>
                    <section className="flex justify-center gap-4">
                    </section>
                </header>
            </main>
        </>
    )
}