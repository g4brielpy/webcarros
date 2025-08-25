import { CardCar } from "../../components/CardCar";
import { InputCustom } from "../../components/UI/InputCustom";
import { ButtonCustom } from "../../components/UI/ButtonCustom";

export default function Home() {
  return (
    <div className="container px-4 mx-auto my-8">
      <section className="my-20">
        <form className="flex gap-6">
          <InputCustom placeholder="Digite o nome do carro..." />
          <ButtonCustom>Buscar</ButtonCustom>
        </form>
      </section>

      <main>
        <h1 className="text-center text-2xl md:text-4xl font-bold">
          Carros novos e usados em todo Brasil
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardCar />
          <CardCar />
          <CardCar />
          <CardCar />
          <CardCar />
          <CardCar />
          <CardCar />
          <CardCar />
        </section>
      </main>
    </div>
  );
}
