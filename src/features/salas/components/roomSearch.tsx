"use client";
import { useRouter } from "next/router"
import { useState } from "react";

export default function RoomSearch(){

    const router = useRouter();
    const [room,setRoom] = useState("");

    const handleSearch = (roomName: string): undefined => {
        const params = new URLSearchParams(window.location.search);
        params.set('roomName', roomName); 
        router.push(`?${params.toString()}`);

        //Apenas deixado como undefined para o typescript não reclamar.
        return undefined
    };

    return(
        <form onSubmit={handleSearch(room)}>
            <input
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                className="w-4/5 p-3"
                placeholder="O que você busca hoje?"
            />
        </form>
    )
}