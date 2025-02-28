import Header from "./_components/header";


export default function Home() {
  return (
    <div className="h-screen bg-secondaryBlue flex items-center justify-center">
      <article className="bg-primaryBlue flex rounded-2xl w-4/5 h-4/5 p-6 flex-col items-center text-white">
        <Header/>
        <main className="flex flex-col items-center justify-center w-4/5 h-4/5">
          <h2 className="text-8xl text-center">
            Delta
          </h2>
          <p className="text-3xl">
            Seu turismo facilitado
          </p>
          <button className="bg-black mt-8 rounded-lg p-4 w-44 text-lg">
            <a href="">Sobre nós</a>
          </button>
        </main>
      </article>
    </div>
  );
}
