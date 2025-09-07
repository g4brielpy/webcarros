import { useContext } from "react";
import { useLogout } from "../../hooks/useLogout";
import { Link, useNavigate } from "react-router";

import { InputCustom } from "../../components/UI/InputCustom";
import { ButtonCustom } from "../../components/UI/ButtonCustom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, FormData } from "../../schemas/registerSchema";

import { AuthContext, AuthContextType } from "../../contexts/AuthContext";
import { FirebaseError } from "firebase/app";

export default function Register() {
  const navigate = useNavigate();
  const authContext = useContext<AuthContextType | null>(AuthContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(registerSchema) });

  const onSubmitRegister = async (data: FormData) => {
    try {
      await authContext?.registerUser(data.name, data.email, data.password);
      navigate("/dashboard");
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("Este e-mail já está sendo usado.");
            break;
          case "auth/invalid-email":
            alert("O e-mail informado não é válido.");
            break;
          case "auth/weak-password":
            alert("A senha deve ter pelo menos 6 caracteres.");
            break;
          default:
            alert("Erro ao realizar cadastro. Tente novamente.");
        }
      } else {
        alert("Erro inesperado no registro.");
      }

      console.error("Erro ao realizar cadastro:", error);
    }
  };

  useLogout();

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
