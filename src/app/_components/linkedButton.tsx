interface LinkedButtonRequirements{
    label:string;
    link:string;
}

export default function LinkedButton({label,link} :LinkedButtonRequirements){
    return(
        <button className="bg-white w-40 p-2 rounded-2xl cursor-pointer">
            <a href={link}>{label}</a>
        </button>
    )
}