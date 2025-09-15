import { FiUpload } from "react-icons/fi";
import { InputCustom } from "../../components/UI/InputCustom";

export default function NewCar() {
  return (
    <div className="container px-4 mx-auto my-8">
      <main>
        <section>
          <button>
            <FiUpload />
          </button>
        </section>

        <section>
          <form className="space-y-6">
            <InputCustom type="text" label="Nome do Carro" />
            <InputCustom type="text" label="Modelo" />
            <div>
              <InputCustom label="Ano" />
              <InputCustom label="Km's rodados" />
            </div>
            <InputCustom label="Valor em R$" />
            <InputCustom type="text" label="Cidade" />
            <InputCustom type="text" label="WhatsApp" />
            <InputCustom type="text" label="Descrição" />
          </form>
        </section>
      </main>
    </div>
  );
}
