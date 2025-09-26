import {
  getDownloadURL,
  ref,
  listAll,
  StorageReference,
} from "firebase/storage";
import { FirebaseError } from "firebase/app";
import { storage } from "../firebase/firebaseConnection";

async function getUrl(itemRef: StorageReference) {
  const url = await getDownloadURL(itemRef);
  return { url, name: itemRef.name };
}

export async function getAllImagesUrls(userId: string) {
  try {
    const imagesRef = ref(storage, `images/${userId}/`);
    const listResult = await listAll(imagesRef);

    const urls = await Promise.all(listResult.items.map(getUrl));

    return urls;
  } catch (error) {
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case "storage/object-not-found":
          return []; // Pasta vazia
        case "storage/unauthorized":
          throw new Error(
            "Voc\u00ea n\u00e3o tem permiss\u00e3o para listar essas imagens."
          );
        case "storage/unknown":
          throw new Error(
            "Erro desconhecido ao listar imagens no Firebase Storage."
          );
        default:
          throw new Error("Erro ao listar imagens. C\u00f3digo: " + error.code);
      }
    }

    throw new Error("Erro inesperado ao listar imagens.");
  }
}
