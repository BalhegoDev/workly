import RegisterForm from "@/app/_components/registerForm"

export default function Guia(){
    return(
      <div className="h-screen bg-secondaryBlue flex items-center justify-center">
        <article className=" items-center bg-primaryBlue rounded-2xl w-4/5 h-4/5 p-6 flex-col text-white">
          <RegisterForm/>
        </article>
      </div>
    )
}