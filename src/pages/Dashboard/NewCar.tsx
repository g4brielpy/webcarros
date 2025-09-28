import { useContext, useState } from "react";
import { AuthContext, AuthContextType } from "../../contexts/AuthContext";

import { uploadImage } from "../../utils/uploadImage";
import { deleteImage } from "../../utils/deleteImage";
import { registerCar } from "../../utils/registerCar";

import { FiUpload, FiTrash } from "react-icons/fi";
import { InputCustom } from "../../components/UI/InputCustom";
import { ButtonCustom } from "../../components/UI/ButtonCustom";
import { HeaderDashboard } from "../../components/HeaderDashboard";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newCarSchema, NewCarFormData } from "../../schemas/newCarSchema";

export default function NewCar() {
  const authLogin = useContext<AuthContextType | null>(AuthContext);
  const [imagesUrl, setImagesUrl] = useState<{ name: string; url: string }[]>(
    []
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewCarFormData>({
    resolver: zodResolver(newCarSchema),
  });

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file && (file.type == "image/jpeg" || file.type == "image/png")) {
      try {
        const urlImage = await uploadImage(file, authLogin!.user!.uid);
        setImagesUrl((prev) => [...prev, urlImage]);
      } catch (error) {
        console.error(error);
      } finally {
        console.log(imagesUrl);
      }
    } else {
      console.log(
        "Por favor, selecione um arquivo de imagem válido (JPEG ou PNG)."
      );
      return;
    }
  };

  const handleRemoveImage = async (name: string, indexImageDel: number) => {
    try {
      await deleteImage(authLogin!.user!.uid, name);
      setImagesUrl((prev) =>
        prev.filter((_, index) => index !== indexImageDel)
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmitCar = async (data: NewCarFormData) => {
    if (imagesUrl.length == 0) {
      alert("Cadastre pelo menos uma imagem para o carro");
    }
    registerCar(data, imagesUrl, authLogin!.user!.uid);
  };

  return (
    <div className="container px-4 mx-auto my-10">
      <HeaderDashboard />
      <main className="mt-8 space-y-8">
        <section className="h-44 flex flex-col sm:flex-row gap-4 ">
          <div
            className="
            relative flex flex-col items-center justify-center 
            border-2 border-dashed cursor-pointer 
            border-gray-500 rounded-xl h-full text-gray-600
            min-w-[200px] w-1/3 
            "
          >
            <input
              type="file"
              name="image"
              id="image"
              className="absolute w-full h-full opacity-0 cursor-pointer"
              onChange={handleFileChange}
            />
            <FiUpload size={32} />
            <span className="mt-2 text-sm">Clique para enviar imagem</span>
          </div>

          {imagesUrl.length > 0 && (
            <div className="bg-blue-40 flex gap-2 overflow-x-scroll h-full px-2">
              {imagesUrl.map((image, index) => (
                <div key={index} className="h-full relative">
                  <img
                    src={image.url}
                    alt={`Imagem ${index + 1}`}
                    className="h-full rounded-lg p-1 object-cover border border-gray-500"
                  />
                  <button
                    onClick={() => handleRemoveImage(image.name, index)}
                    className="absolute top-4 right-4 text-red-500 font-bold cursor-pointer hover:text-red-700 transition-colors"
                  >
                    <FiTrash size={24} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        <section>
          <form className="space-y-6" onSubmit={handleSubmit(handleSubmitCar)}>
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

            <div className="flex flex-col w-full">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Descrição
              </label>
              <textarea
                {...register("description")}
                className={`
                  h-32 px-4 rounded-md border text-gray-900 placeholder-gray-500
                bg-gray-50 shadow-sm transition-all duration-200 ease-in-out
                  focus:outline-none focus:border-[#E11138] focus:ring-2 focus:ring-[#E11138] focus:shadow-md
                  ${errors.description ? "border-red-500" : "border-gray-400"}`}
              />
              {errors.description && (
                <span className="mt-1 text-sm text-red-500">
                  {errors.description.message}
                </span>
              )}
            </div>

            <ButtonCustom className="w-full">Cadastrar</ButtonCustom>
          </form>
        </section>
      </main>
    </div>
  );
}
