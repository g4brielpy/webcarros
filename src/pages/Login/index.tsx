import { Link } from "react-router";
import { InputCustom } from "../../components/UI/InputCustom";
import { ButtonCustom } from "../../components/UI/ButtonCustom";

export default function Login() {
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

        <form className="space-y-6">
          <InputCustom type="email" placeholder="Digite seu E-mail" />
          <InputCustom type="password" placeholder="Digite sua Senha" />
          <ButtonCustom className="w-full">Acessar</ButtonCustom>
        </form>
        <small className="inline-block mt-4 md:text-sm hover:underline">
          <Link to={"/register"}>Ainda não possui uma conta? Cadastre-se</Link>
        </small>
      </div>
    </main>
  );
}
