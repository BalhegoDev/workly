"use client";

import RoomChoose from "../components/roomChoose"
import { useSearchParams } from "next/navigation"

export function HandleRoomChoose(){
    const searchParam = useSearchParams();
    const roomType = searchParam.get("tipo_sala");

    return(
        <>
            {
                roomType == "coworking" && 
                <>
                    <RoomChoose
                        bgColor="bg-primaryBlue"
                        textColor="text-white"
                        link="/salas?tipo_sala=coworking"
                        label="Co-working"
                    />
                    <RoomChoose
                        bgColor="bg-white"
                        textColor="text-primaryBlue"
                        link="/salas?tipo_sala=reunioes"
                        label="Reuniões"
                    />
                    <RoomChoose
                        bgColor="bg-white"
                        textColor="text-primaryBlue"
                        link="/salas?tipo_sala=BigSpaces"
                        label="Grandes espaços"
                    />
                </>   
            }    
            {
                roomType == "reunioes" && 
                <>
                    <RoomChoose
                        bgColor="bg-white"
                        textColor="text-primaryBlue"
                        link="/salas?tipo_sala=coworking"
                        label="Co-working"
                    />
                    <RoomChoose
                        bgColor="bg-primaryBlue"
                        textColor="text-white"
                        link="/salas?tipo_sala=reunioes"
                        label="Reuniões"
                    />
                    <RoomChoose
                        bgColor="bg-white"
                        textColor="text-primaryBlue"
                        link="/salas?tipo_sala=BigSpaces"
                        label="Grandes espaços"
                    />
                </>       
            }
            {
                roomType == "BigSpaces" && 
                <>
                    <RoomChoose
                        bgColor="bg-white"
                        textColor="text-primaryBlue"
                        link="/salas?tipo_sala=coworking"
                        label="Co-working"
                    />
                    <RoomChoose
                        bgColor="bg-white"
                        textColor="text-primaryBlue"
                        link="/salas?tipo_sala=reunioes"
                        label="Reuniões"
                    />
                    <RoomChoose
                        bgColor="bg-primaryBlue"
                        textColor="text-white"
                        link="/salas?tipo_sala=BigSpaces"
                        label="Grandes espaços"
                    />
                </>
            }       
        </>
    )
}