import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase/firebaseConnection";

export async function uploadImage(file: File, userId: string): Promise<string> {
  const storageRef = ref(storage, `images/${userId}/${file.name}`);
  await uploadBytes(storageRef, file);

  const url = await getDownloadURL(storageRef);
  return url;
}
