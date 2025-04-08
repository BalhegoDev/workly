import { RoomChoice } from "@/interfaces/RoomChoice.interface"

export default function RoomChoose( { bgColor, textColor, link, label }: RoomChoice ){
    return(
        <button style={{border:"thin"}} className={`rounded-lg p-3 border-primaryBlue ${bgColor}` } >
            <a className={`${textColor}`} href={link}>
                {label}
            </a>
        </button>
    )
}