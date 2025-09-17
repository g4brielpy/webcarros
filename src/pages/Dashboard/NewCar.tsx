import { FiUpload } from "react-icons/fi";

import { InputCustom } from "../../components/UI/InputCustom";
import { ButtonCustom } from "../../components/UI/ButtonCustom";
import { HeaderDashboard } from "../../components/HeaderDashboard";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newCarSchema, NewCarFormData } from "../../schemas/newCarSchema";

export default function NewCar() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewCarFormData>({
    resolver: zodResolver(newCarSchema),
  });

  return (
    <div className="container px-4 mx-auto my-10">
      <HeaderDashboard />
      <main className="mt-8 space-y-8">
        <section>
          <button className="flex flex-col items-center justify-center border-2 border-dashed border-gray-500 rounded-xl w-full h-44 text-gray-600">
            <FiUpload size={32} />
            <span className="mt-2 text-sm">Clique para enviar imagem</span>
          </button>
        </section>

        <section>
          <form className="space-y-6">
            <InputCustom type="text" label="Nome do Carro" />
            <InputCustom type="text" label="Modelo" />

            <div className="grid grid-cols-2 gap-4">
              <InputCustom label="Ano" />
              <InputCustom label="Km's rodados" />
            </div>

            <InputCustom label="Valor em R$" />
            <InputCustom type="text" label="Cidade" />
            <InputCustom type="text" label="WhatsApp" />

            <InputCustom type="text" label="Descrição" />

            <ButtonCustom className="w-full">Cadastrar</ButtonCustom>
          </form>
        </section>
      </main>
    </div>
  );
}
