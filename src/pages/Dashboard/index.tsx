import { HeaderDashboard } from "../../components/HeaderDashboard";
import { CardCar } from "../../components/CardCar";

export default function Dashboard() {
  return (
    <div className="container px-4 mx-auto my-8">
      <HeaderDashboard />
      <main className="mt-8">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardCar />
          <CardCar />
        </section>
      </main>
    </div>
  );
}
