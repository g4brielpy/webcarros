import React from "react";

export default function Home() {
  return (
    <main className="container px-4 mx-auto my-8">
      <section className="my-20">
        <form className="flex gap-6">
          <input
            className="h-10 border px-4 rounded-md flex items-center flex-1"
            type="text"
            placeholder="Digite o nome do carro..."
          />
          <button className="w-60 h-10 text-white bg-red-700 text-xl font-bold rounded-md">
            Buscar
          </button>
        </form>
      </section>

      <section>
        <h1 className="text-center text-2xl md:text-4xl font-bold">
          Carros novos e usados em todo Brasil
        </h1>
      </section>
    </main>
  );
}
