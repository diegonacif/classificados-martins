import { collection, query, where, getDocs } from "firebase/firestore";
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
}

export const fetchActiveAds = async (): Promise<Ad[]> => {
  const adsRef = collection(db, "ads");
  const q = query(adsRef, where("status", "==", "active"));
  const querySnapshot = await getDocs(q);

  const ads: Ad[] = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Ad[];

  return ads;
};
