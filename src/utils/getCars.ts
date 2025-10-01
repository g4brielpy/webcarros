import { getDocs, collection, Timestamp } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import { db } from "../firebase/firebaseConnection";

import { NewCarFormData } from "../schemas/newCarSchema";

export interface CarsData extends NewCarFormData {
  uid: string;
  idCar: string;
  imagens: string[];
  createdAt: Timestamp;
}

export async function getCars(): Promise<CarsData[]> {
  const docRef = collection(db, "cars");

  try {
    const docSnap = await getDocs(docRef);
    if (docSnap.empty) {
      return [];
    }

    const listCars: CarsData[] = docSnap.docs.map((doc) => ({
      ...(doc.data() as CarsData),
      idCar: doc.id,
    }));

    return listCars;
  } catch (error) {
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case "permission-denied":
          throw new Error("Você não tem permissão para acessar os carros.");
        case "unavailable":
          throw new Error(
            "O serviço do Firestore está temporariamente indisponível. Tente novamente mais tarde."
          );
        case "resource-exhausted":
          throw new Error(
            "Limite de requisições do Firestore excedido. Tente novamente em alguns instantes."
          );
        default:
          throw new Error("Erro ao buscar carros. Código: " + error.code);
      }
    }

    throw new Error("Erro inesperado ao buscar os carros.");
  }
}
