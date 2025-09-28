import { NewCarFormData } from "../schemas/newCarSchema";
import { db } from "../firebase/firebaseConnection";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function registerCar(
  data: NewCarFormData,
  imagens: { url: string; name: string }[],
  uid: string
) {
  try {
    const docRef = await addDoc(collection(db, `users/${uid}/cars`), {
      ...data,
      imagens,
      createdAt: serverTimestamp(),
    });

    return {
      id: docRef.id,
      ...data,
      imagens,
    };
  } catch (error) {
    console.error("Erro ao cadastrar carro:", error);
    throw new Error("Não foi possível cadastrar o carro. Tente novamente.");
  }
}
