import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { FirebaseError } from "firebase/app";

import { storage } from "../firebase/firebaseConnection";

export async function uploadImage(file: File, userId: string): Promise<string> {
  try {
    const storageRef = ref(storage, `images/${userId}/${file.name}`);
    await uploadBytes(storageRef, file);

    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case "storage/unauthorized":
          throw new Error("Você não tem permissão para enviar essa imagem.");
        case "storage/canceled":
          throw new Error("O envio da imagem foi cancelado.");
        case "storage/quota-exceeded":
          throw new Error(
            "Limite de armazenamento excedido. Tente novamente mais tarde."
          );
        case "storage/unknown":
          throw new Error("Erro desconhecido no servidor do Firebase Storage.");
        default:
          throw new Error(
            "Erro ao tentar enviar a imagem. Código: " + error.code
          );
      }
    }

    throw new Error("Erro inesperado ao enviar a imagem.");
  }
}
