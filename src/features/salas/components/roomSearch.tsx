'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RoomSearch() {
    const router = useRouter();
    const [room, setRoom] = useState("");

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        const params = new URLSearchParams(window.location.search);
        params.set('roomName', room);
        router.push(`?${params.toString()}`);
    };

    return (
        <form className="flex flex-col items-center gap-2 filter" onSubmit={handleSearch}>
            <input
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                className="p-2"
                placeholder="O que você busca hoje?"
                style={{ border: "2px solid #C0D3ED", borderRadius: "4px", outline: "none" }}
            />
            <section className="flex justify-between w-full md:w-auto items-center gap-2">
                <p className="text-primaryBlue font-semibold text-xl">Filtro:</p>
                <select 
                    className="p-2"
                    style={{ border: "2px solid #0056A8", borderRadius: "3px", outline: "none" }}
                >
                    <option disabled selected>Escolher Filtro</option>
                    <option value={""}>Menor preço</option>
                    <option value={""}>Maior preço</option>
                </select>
            </section>
        </form>
    );
}