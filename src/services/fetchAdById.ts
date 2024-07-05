import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase.config";

interface Ad {
  id: string;
  title: string;
  description: string;
  price: number;
  city: string;
  neighborhood?: string;
  category: string;
  images: string[];
  userName: string;
  userPhone: string;
}

export async function fetchAdById(adId: string): Promise<Ad> {
  try {
    const adDoc = doc(db, "ads", adId);
    const adSnapshot = await getDoc(adDoc);

    if (adSnapshot.exists()) {
      const adData = adSnapshot.data();
      return {
        id: adSnapshot.id,
        title: adData.title,
        description: adData.description,
        price: adData.price,
        city: adData.city,
        neighborhood: adData.neighborhood || '',
        category: adData.category,
        images: adData.images,
        userName: adData.userName,
        userPhone: adData.userPhone,
      } as Ad;
    } else {
      throw new Error("Anúncio não encontrado");
    }
  } catch (error) {
    console.error("Erro ao buscar anúncio:", error);
    throw error;
  }
}
