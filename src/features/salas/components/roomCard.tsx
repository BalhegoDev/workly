import Image from "next/image"
import HandleSeloRender from "../libs/handleSeloRender";
import Rating from "@mui/material/Rating";

import { RoomCardInterface as Interface} from "../interfaces/RoomCard.interface";
import { Images } from "../constants/images";

export default function RoomCard({imageURL,description,title,rating,capacity,moneyType,price,payementType,selos,alugadoQntd}: Interface){
    return(
        <article
            style={{borderRadius:"8px", boxShadow: "0px 3px 13px 3px rgba(0,0,0,0.61)"}} 
            className="rounded-xl flex flex-col items-center w-full max-w-[96%] md:w-96"
        >
            <Image
                alt={"imagem do lugar"}
                src={imageURL}
                width={200}
                height={200}
                style={{ width:"100%", height:"11rem", borderRadius: "8px 8px 0px 0px"}}
            />
            <section className="w-full mt-4">
                <section className="flex flex-col" style={{width:"98%", paddingLeft:"15px"}}>
                    <p className="text-primaryBlue font-bold text-xl">
                        {title}
                    </p>
                    <p className="text-black mt-3 text-lg line-clamp-4">
                        {description}
                    </p>
                        <section className="flex text-primaryBlue mt-5 mb-5 flex-col">
                            <p className="font-bold">Características:</p>
                            <section className="flex justify-between items-center">
                                <section className="flex items-center">
                                    <Image
                                        alt="Ícone de capacidade"
                                        src={Images.capacity_icon}
                                        width={10}
                                        height={10}
                                        style={{marginRight:".2rem"}}
                                    />
                                    <p>
                                        {capacity} pessoas
                                    </p>
                                </section>
                                {selos?.confianca &&
                                    <section className="flex items-center justify-center">
                                        <Image
                                            src={Images.icon_security}
                                            alt="Atestado de verificado"
                                            width={10}
                                            height={10}
                                        />
                                        <p className="text-primaryBlue font-extrabold">
                                            Verificado
                                        </p>
                                    </section> 
                                }
                                <section className="flex items-end justify-around">
                                    <HandleSeloRender
                                        selos={selos}
                                    />
                                </section>
                            </section>
                    </section>
                    <section className="flex mb-10 justify-between">
                        <section className="flex flex-col">
                            <section className="flex text-primaryBlue">
                                <p>
                                    {rating}
                                </p>
                                <Rating
                                    value={rating}
                                    readOnly
                                    precision={0.1}
                                    name="room-rating"
                                />
                            </section>
                            <p className="text-sm text-gray-500">
                                Alugado {alugadoQntd} vezes
                            </p>
                        </section>
                        <section style={{width:"18rem", gap:"0.8rem"}} className="flex items-center justify-end">
                            {payementType === 1 &&
                                <p className="font-extrabold text-primaryBlue text-2xl">
                                    {`${moneyType}${price}`}
                                </p>
                            }
                            {
                                payementType === 2 &&
                                <p className="font-extrabold text-primaryBlue text-2xl">
                                    a negociar
                                </p>
                            }
                            <p style={{ color:"#7E7E7E", fontSize:"12px" }}>Valor p/ hora</p>
                        </section>
                    </section>
                </section>
            </section>
        </article>
    )
}