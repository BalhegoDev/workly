import CardSpaceInterface from "@/interfaces/cardSpace.interface"
import Image from "next/image"

export default function CardSpace({ image, label, link, title, className }: CardSpaceInterface) {
    return (
        <section className="text-primaryBlue rounded-md flex flex-col items-center p-2 border-2 border-primaryBlue justify-between lg:w-72">
            <Image
                width={135}
                height={135}
                src={image}
                alt="imagem ilustrativa"
                className={className}
            />
            <p className="font-bold text-3xl">
                {title}
            </p>
            <p className="text-justify my-3 text-sm w-64 lg:text-xl">
                {label}
            </p>
            <a href={link} className="flex items-center gap-2 justify-end w-full p-4">
                <p className="text-sm lg:text-xl ">Ver mais</p>
                <Image
                    width={16}
                    height={16}
                    src="/arrowRight.svg"
                    alt="imagem de uma flecha para direita"
                />
            </a>
        </section>
    )
}
