import LinkedButton from "../_components/linkedButton"

export default function Register(){
    return(
        <div className="h-screen bg-secondaryBlue flex items-center justify-center">
            <article className="bg-primaryBlue p-5 w-3/4 rounded-xl">
                <h1 className="text-white text-center text-2xl">
                    Como você deseja se cadastrar ?
                </h1>
                <section className="flex justify-center gap-10 mt-10">
                    <button className="">
                    <LinkedButton
                        label="Guia"
                        link="/register/guia"
                    />
                    </button>
                    <button>
                    <LinkedButton
                        label="Turista"
                        link="/register/turista"
                    />
                    </button>
                </section>
            </article>
        </div>
    )
}