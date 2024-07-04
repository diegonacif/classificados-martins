import { useEffect, useState } from "react";
import { AdsItem } from "./components/AdsItem";
import { AdsListContainer, AdsListGrid } from "./styles";
import { fetchActiveAds } from "../../services/fetchActiveAds";

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

export function AdsList() {
  const [ads, setAds] = useState<Ad[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAds = async () => {
      try {
        const fetchedAds = await fetchActiveAds();
        setAds(fetchedAds);
      } catch (error) {
        console.error("Error fetching ads:", error);
      } finally {
        setLoading(false);
      }
    };

    getAds();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }


  return (
    <AdsListContainer>
      <AdsListGrid>
      {ads.map((ad) => (
        <AdsItem key={ad.id} ad={ad} />
      ))}
      </AdsListGrid>
    </AdsListContainer>
  )
}