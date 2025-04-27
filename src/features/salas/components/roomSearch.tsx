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
        <form className="flex flex-col md:flex-row md:items-end mt-4 w-4/6 gap-4" onSubmit={handleSearch}>
            <input
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                className="w-full md:w-4/5 p-2"
                placeholder="O que você busca hoje?"
                style={{border:"2px solid #C0D3ED", borderRadius:"4px", outline:"none"}}
            />
            <section className="flex justify-between md:justify-start mt-4 md:mt-0 w-full md:w-64 items-center gap-4">
                <p className="text-primaryBlue font-semibold text-xl">Filtro:</p>
                <select 
                    className="p-2"
                    style={{ border:"2px solid #0056A8", borderRadius:"3px", outline:"none" }}
                >
                    <option disabled selected>Escolher Filtro</option>
                    <option value={""}>Menor preço</option>
                    <option value={""}>Maior preço</option>
                </select>
            </section>
        </form>
    );
}