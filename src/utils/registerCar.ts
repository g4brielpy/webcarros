import { db } from "../firebase/firebaseConnection";
import { FirebaseError } from "firebase/app";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import { NewCarFormData } from "../schemas/newCarSchema";

export async function registerCar(
  data: NewCarFormData,
  imagens: { url: string; name: string }[],
  uid: string
) {
  try {
    const docRef = await addDoc(collection(db, "cars"), {
      ...data,
      uid,
      imagens,
      createdAt: serverTimestamp(),
    });

    return {
      id: docRef.id,
      ...data,
      imagens,
    };
  } catch (error) {
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case "permission-denied":
          throw new Error(
            "Você não tem permissão para cadastrar um carro. Verifique seu acesso."
          );
        case "unavailable":
          throw new Error(
            "O serviço do Firestore está temporariamente indisponível. Tente novamente mais tarde."
          );
        case "resource-exhausted":
          throw new Error(
            "Limite de requisições do Firestore excedido. Tente novamente em alguns instantes."
          );
        default:
          throw new Error("Erro ao cadastrar o carro. Código: " + error.code);
      }
    }

    throw new Error("Erro inesperado ao cadastrar o carro.");
  }
}
