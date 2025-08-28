import { Link } from "react-router";
import { InputCustom } from "../../components/UI/InputCustom";
import { ButtonCustom } from "../../components/UI/ButtonCustom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, FormData } from "../../schemas/registerSchema";

export default function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(registerSchema) });

  const onSubmitRegister = (data: FormData) => console.log(data);

  return (
    <main className="w-full h-dvh flex items-center">
      <div className="container px-4 max-w-[800px] mx-auto">
        <Link to={"/register"}>
          <img
            src="/public/webCarrosLogo.svg"
            alt="web Carros Logo"
            className="w-60 md:w-96 mx-auto mb-14"
          />
        </Link>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmitRegister)}>
          <InputCustom
            type="text"
            placeholder="Digite seu nome completo"
            {...register("name")}
            error={errors.name?.message}
          />
          <InputCustom
            type="email"
            placeholder="Digite seu E-mail"
            {...register("email")}
            error={errors.email?.message}
          />
          <InputCustom
            type="password"
            placeholder="Digite sua Senha"
            {...register("password")}
            error={errors.password?.message}
          />
          <ButtonCustom className="w-full">Acessar</ButtonCustom>
        </form>

        <small className="inline-block mt-4 md:text-sm hover:underline">
          <Link to={"/login"}>Já possui uma conta? Faça login</Link>
        </small>
      </div>
    </main>
  );
}
