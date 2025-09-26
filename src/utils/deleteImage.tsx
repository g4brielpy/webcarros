import { storage } from "../firebase/firebaseConnection";
import { deleteObject, ref } from "firebase/storage";
import { FirebaseError } from "firebase/app";

export async function deleteImage(
  uid: string,
  imageName: string
): Promise<void> {
  try {
    const imageRef = ref(storage, `images/${uid}/${imageName}`);
    await deleteObject(imageRef);
  } catch (error) {
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case "storage/object-not-found":
          throw new Error("A imagem que você tentou excluir não existe.");
        case "storage/unauthorized":
          throw new Error("Você não tem permissão para excluir esta imagem.");
        case "storage/canceled":
          throw new Error("A exclusão da imagem foi cancelada.");
        case "storage/unknown":
          throw new Error("Erro desconhecido no servidor do Firebase Storage.");
        default:
          throw new Error(
            "Erro ao tentar excluir a imagem. Código: " + error.code
          );
      }
    }

    throw new Error("Erro inesperado ao excluir a imagem.");
  }
}
