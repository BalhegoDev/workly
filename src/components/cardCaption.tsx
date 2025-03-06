import Image from "next/image"

import CardCaptionInterface from "@/interfaces/cardCaption.interface"

export default function CardCaption({image,title,className}:CardCaptionInterface){
    return(
        <section className={`flex flex-col items-center gap-2 ${className}`}>
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