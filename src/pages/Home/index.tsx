import { ButtonSearch } from "../../components/UI/ButtonSearch";

export default function Home() {
  return (
    <div className="container px-4 mx-auto my-8">
      <section className="my-20">
        <form className="flex gap-6">
          <input
            className="h-10 border px-4 rounded-md flex items-center flex-1"
            type="text"
            placeholder="Digite o nome do carro..."
          />
          <ButtonSearch>Buscar</ButtonSearch>
        </form>
      </section>

      <main>
        <h1 className="text-center text-2xl md:text-4xl font-bold">
          Carros novos e usados em todo Brasil
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-amber-300 w-[500px]">
            <div id="contentWrapper">
              <img
                src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202508/20250825/bmw-x5-3-0-i6-turbo-hibrido-xdrive50e-m-sport-automatico-wmimagem12201877439.webp?s=fill&w=552&h=414&q=60"
                alt="Carro"
              />
            </div>
            <div id="contentInfos" className="flex flex-col">
              <h3>BMW X5</h3>
              <small>2023/2024 | 14.000 KM</small>
              <strong>R$ 615.900</strong>
            </div>

            <hr />

            <p>Belo Horizonte - MG</p>
          </div>

          <div className="bg-amber-300 w-[500px]">
            <div id="contentWrapper">
              <img
                src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202508/20250825/bmw-x5-3-0-i6-turbo-hibrido-xdrive50e-m-sport-automatico-wmimagem12201877439.webp?s=fill&w=552&h=414&q=60"
                alt="Carro"
              />
            </div>
            <div id="contentInfos" className="flex flex-col">
              <h3>BMW X5</h3>
              <small>2023/2024 | 14.000 KM</small>
              <strong>R$ 615.900</strong>
            </div>

            <hr />

            <p>Belo Horizonte - MG</p>
          </div>

          <div className="bg-amber-300 w-[500px]">
            <div id="contentWrapper">
              <img
                src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202508/20250825/bmw-x5-3-0-i6-turbo-hibrido-xdrive50e-m-sport-automatico-wmimagem12201877439.webp?s=fill&w=552&h=414&q=60"
                alt="Carro"
              />
            </div>
            <div id="contentInfos" className="flex flex-col">
              <h3>BMW X5</h3>
              <small>2023/2024 | 14.000 KM</small>
              <strong>R$ 615.900</strong>
            </div>

            <hr />

            <p>Belo Horizonte - MG</p>
          </div>

          <div className="bg-amber-300 w-[500px]">
            <div id="contentWrapper">
              <img
                src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202508/20250825/bmw-x5-3-0-i6-turbo-hibrido-xdrive50e-m-sport-automatico-wmimagem12201877439.webp?s=fill&w=552&h=414&q=60"
                alt="Carro"
              />
            </div>
            <div id="contentInfos" className="flex flex-col">
              <h3>BMW X5</h3>
              <small>2023/2024 | 14.000 KM</small>
              <strong>R$ 615.900</strong>
            </div>

            <hr />

            <p>Belo Horizonte - MG</p>
          </div>
        </section>
      </main>
    </div>
  );
}
