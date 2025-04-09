import { RoomChoice } from "@/interfaces/RoomChoice.interface"

export default function RoomChoose( { bgColor, textColor, link, label }: RoomChoice ){
    return(
        <button style={{border:"thin solid #0056A8"}} className={`rounded-md p-2 ${bgColor}` } >
            <a className={`${textColor}`} href={link}>
                {label}
            </a>
        </button>
    )
}