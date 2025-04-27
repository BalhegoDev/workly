import Header from "@/components/header"
import { HandleRoomChoose } from "@/features/salas/libs/handleRoomChoose"
import RoomSearch from "@/features/salas/components/roomSearch"
import RoomCard from "@/features/salas/components/roomCard"

export default function Salas(){

    return(
        <>
            <Header/>
            <section className="bg-primaryBlue h-24 mb-5 flex items-center justify-center">
                <h2 className="text-white text-xl text-center">
                 Nossos espaços
                </h2>
            </section>
            <main 
                className="flex flex-col mx-auto items-center mb-5"
                style={{width:"98.8%"}}
            >
                <header className=" flex w-full mb-5">
                    <section className="flex justify-between p-2 items-center w-full flex-wrap gap-1">
                        <section className="flex gap-1 lg:gap-2 flex-wrap">
                            <HandleRoomChoose/> 
                        </section>
                        <RoomSearch/>
                    </section>
                </header>
                <section className="flex flex-wrap  justify-center lg:justify-between gap-4 px-4 w-full">
                    <RoomCard
                        imageURL="/salas/teste/room-business.svg"
                        title="Hub Space"
                        description="Sala moderna, climatizada, com paredes de vidro, tomadas, quadro branco e projetor. Perfeita para reuniões e apresentações."
                        capacity={22}
                        rating={4}
                        payementType={1}
                        price={50}
                        moneyType="R$"
                        alugadoQntd={20}
                        selos={
                            {
                                confianca:true,
                                quadros:true,
                                qualidade:true,
                                projetores:true,
                                tomadas:true,
                                climatizado:true,
                                iluminacao:true,
                            }
                        }
                    />
                    <RoomCard
                        imageURL="/salas/teste/room-business.svg"
                        title="Hub Space"
                        description="Sala moderna, climatizada, com paredes de vidro, tomadas, quadro branco e projetor. Perfeita para reuniões e apresentações."
                        capacity={22}
                        rating={4}
                        payementType={1}
                        price={50}
                        moneyType="R$"
                        alugadoQntd={20}
                        selos={
                            {
                                confianca:true,
                                quadros:true,
                                qualidade:true,
                                projetores:true,
                                tomadas:true,
                                climatizado:true,
                                iluminacao:true,
                            }
                        }
                    />
                    <RoomCard
                        imageURL="/salas/teste/room-business.svg"
                        title="Hub Space"
                        description="Sala moderna, climatizada, com paredes de vidro, tomadas, quadro branco e projetor. Perfeita para reuniões e apresentações."
                        capacity={22}
                        rating={4}
                        payementType={1}
                        price={50}
                        moneyType="R$"
                        alugadoQntd={20}
                        selos={
                            {
                                confianca:true,
                                quadros:true,
                                qualidade:true,
                                projetores:true,
                                tomadas:true,
                                climatizado:true,
                                iluminacao:true,
                            }
                        }
                    />
                    <RoomCard
                        imageURL="/salas/teste/room-business.svg"
                        title="Hub Space"
                        description="Sala moderna, climatizada, com paredes de vidro, tomadas, quadro branco e projetor. Perfeita para reuniões e apresentações."
                        capacity={22}
                        rating={4}
                        payementType={1}
                        price={50}
                        moneyType="R$"
                        alugadoQntd={20}
                        selos={
                            {
                                confianca:true,
                                quadros:true,
                                qualidade:true,
                                projetores:true,
                                tomadas:true,
                                climatizado:true,
                                iluminacao:true,
                            }
                        }
                    />
                    <RoomCard
                        imageURL="/salas/teste/room-business.svg"
                        title="Hub Space"
                        description="Sala moderna, climatizada, com paredes de vidro, tomadas, quadro branco e projetor. Perfeita para reuniões e apresentações."
                        capacity={22}
                        rating={4}
                        payementType={1}
                        price={50}
                        moneyType="R$"
                        alugadoQntd={20}
                        selos={
                            {
                                confianca:true,
                                quadros:true,
                                qualidade:true,
                                projetores:true,
                                tomadas:true,
                                climatizado:true,
                                iluminacao:true,
                            }
                        }
                    />
                    <RoomCard
                        imageURL="/salas/teste/room-business.svg"
                        title="Hub Space"
                        description="Sala moderna, climatizada, com paredes de vidro, tomadas, quadro branco e projetor. Perfeita para reuniões e apresentações."
                        capacity={22}
                        rating={4}
                        payementType={1}
                        price={50}
                        moneyType="R$"
                        alugadoQntd={20}
                        selos={
                            {
                                confianca:true,
                                quadros:true,
                                qualidade:true,
                                projetores:true,
                                tomadas:true,
                                climatizado:true,
                                iluminacao:true,
                            }
                        }
                    />
                    <RoomCard
                        imageURL="/salas/teste/room-business.svg"
                        title="Hub Space"
                        description="Sala moderna, climatizada, com paredes de vidro, tomadas, quadro branco e projetor. Perfeita para reuniões e apresentações."
                        capacity={22}
                        rating={4}
                        payementType={1}
                        price={50}
                        moneyType="R$"
                        alugadoQntd={20}
                        selos={
                            {
                                confianca:true,
                                quadros:true,
                                qualidade:true,
                                projetores:true,
                                tomadas:true,
                                climatizado:true,
                                iluminacao:true,
                            }
                        }
                    />
                    <RoomCard
                        imageURL="/salas/teste/room-business.svg"
                        title="Hub Space"
                        description="Sala moderna, climatizada, com paredes de vidro, tomadas, quadro branco e projetor. Perfeita para reuniões e apresentações."
                        capacity={22}
                        rating={4}
                        payementType={1}
                        price={50}
                        moneyType="R$"
                        alugadoQntd={20}
                        selos={
                            {
                                confianca:true,
                                quadros:true,
                                qualidade:true,
                                projetores:true,
                                tomadas:true,
                                climatizado:true,
                                iluminacao:true,
                            }
                        }
                    />
                    <RoomCard
                        imageURL="/salas/teste/room-business.svg"
                        title="Hub Space"
                        description="Sala moderna, climatizada, com paredes de vidro, tomadas, quadro branco e projetor. Perfeita para reuniões e apresentações."
                        capacity={22}
                        rating={4}
                        payementType={1}
                        price={50}
                        moneyType="R$"
                        alugadoQntd={20}
                        selos={
                            {
                                confianca:true,
                                quadros:true,
                                qualidade:true,
                                projetores:true,
                                tomadas:true,
                                climatizado:true,
                                iluminacao:true,
                            }
                        }
                    />
                    <RoomCard
                        imageURL="/salas/teste/room-business.svg"
                        title="Hub Space"
                        description="Sala moderna, climatizada, com paredes de vidro, tomadas, quadro branco e projetor. Perfeita para reuniões e apresentações."
                        capacity={22}
                        rating={4}
                        payementType={1}
                        price={50}
                        moneyType="R$"
                        alugadoQntd={20}
                        selos={
                            {
                                confianca:true,
                                quadros:true,
                                qualidade:true,
                                projetores:true,
                                tomadas:true,
                                climatizado:true,
                                iluminacao:true,
                            }
                        }
                    />
                    <RoomCard
                        imageURL="/salas/teste/room-business.svg"
                        title="Hub Space"
                        description="Sala moderna, climatizada, com paredes de vidro, tomadas, quadro branco e projetor. Perfeita para reuniões e apresentações."
                        capacity={22}
                        rating={4}
                        payementType={1}
                        price={50}
                        moneyType="R$"
                        alugadoQntd={20}
                        selos={
                            {
                                confianca:true,
                                quadros:true,
                                qualidade:true,
                                projetores:true,
                                tomadas:true,
                                climatizado:true,
                                iluminacao:true,
                            }
                        }
                    />
                    <RoomCard
                        imageURL="/salas/teste/room-business.svg"
                        title="Hub Space"
                        description="Sala moderna, climatizada, com paredes de vidro, tomadas, quadro branco e projetor. Perfeita para reuniões e apresentações."
                        capacity={22}
                        rating={4}
                        payementType={1}
                        price={50}
                        moneyType="R$"
                        alugadoQntd={20}
                        selos={
                            {
                                confianca:true,
                                quadros:true,
                                qualidade:true,
                                projetores:true,
                                tomadas:true,
                                climatizado:true,
                                iluminacao:true,
                            }
                        }
                    />
                </section>
            </main>
        </>
    )
}