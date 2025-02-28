import RegisterForm from "@/app/_components/registerForm"

export default function Turista(){
    return(
        <div className="h-screen bg-secondaryBlue flex items-center justify-center">
            <article className="bg-primaryBlue flex rounded-2xl w-4/5 h-4/5 p-6 flex-col items-center text-white" >
                <RegisterForm/>
            </article>
        </div>
    )
}