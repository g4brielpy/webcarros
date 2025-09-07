import { useContext } from "react";
import { useLogout } from "../../hooks/useLogout";
import { Link, useNavigate } from "react-router";

import { InputCustom } from "../../components/UI/InputCustom";
import { ButtonCustom } from "../../components/UI/ButtonCustom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, FormData } from "../../schemas/loginSchema";

import { AuthContext, AuthContextType } from "../../contexts/AuthContext";
import { FirebaseError } from "firebase/app";

export default function Login() {
  const navigate = useNavigate();
  const authLogin = useContext<AuthContextType | null>(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmitLogin = async (data: FormData) => {
    try {
      await authLogin?.login(data.email, data.password);
      navigate("/dashboard");
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/user-not-found":
            alert("Usuário não encontrado.");
            break;
          case "auth/wrong-password":
            alert("Senha incorreta.");
            break;
          default:
            alert("Erro ao tentar fazer login. Tente novamente.");
        }
      } else {
        alert("Erro inesperado.");
      }
    }
  };

  useLogout();

  return (
    <main className="w-full h-dvh flex items-center">
      <div className="container px-4 max-w-[800px] mx-auto">
        <Link to={"/login"}>
          <img
            src="/public/webCarrosLogo.svg"
            alt="web Carros Logo"
            className="w-60 md:w-96 mx-auto mb-14"
          />
        </Link>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmitLogin)}>
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
          <Link to={"/register"}>Ainda não possui uma conta? Cadastre-se</Link>
        </small>
      </div>
    </main>
  );
}
