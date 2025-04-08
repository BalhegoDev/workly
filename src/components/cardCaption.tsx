import Image from "next/image"

import CardCaptionInterface from "@/interfaces/CardCaption.interface"

export default function CardCaption({image,title,className}:CardCaptionInterface){
    return(
        <section className={`flex flex-col items-center justify-between ${className}`}>
            <Image
                src={image}
                width={80}
                height={80}
                alt="imagem ilustrativa"
            />
            <p className="text-white">
                {title}
            </p>
        </section>
    )
}