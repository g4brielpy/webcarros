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
          <form
            className="space-y-6"
            onSubmit={handleSubmit((data) => console.log(data))}
          >
            <InputCustom
              type="text"
              label="Nome do Carro"
              {...register("name_car")}
              error={errors.name_car?.message}
            />
            <InputCustom
              type="text"
              label="Modelo"
              {...register("model")}
              error={errors.model?.message}
            />

            <div className="grid grid-cols-2 gap-4">
              <InputCustom
                label="Ano"
                {...register("year")}
                error={errors.year?.message}
              />
              <InputCustom
                label="Km's rodados"
                {...register("km")}
                error={errors.km?.message}
              />
            </div>

            <InputCustom
              label="Valor em R$"
              {...register("price")}
              error={errors.price?.message}
            />
            <InputCustom
              type="text"
              label="Cidade"
              {...register("city")}
              error={errors.city?.message}
            />
            <InputCustom
              type="text"
              label="WhatsApp"
              {...register("whatsapp")}
              error={errors.whatsapp?.message}
            />

            <InputCustom
              type="text"
              label="Descrição"
              {...register("description")}
            />

            <ButtonCustom className="w-full">Cadastrar</ButtonCustom>
          </form>
        </section>
      </main>
    </div>
  );
}
