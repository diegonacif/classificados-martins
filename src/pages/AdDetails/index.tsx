import { useLocation, useParams } from "react-router-dom";
import { AdDetailsAder, AdDetailsCarousel, AdDetailsContainer, AdDetailsDescription, AdDetailsLocation, AdDetailsMainInfo, AdsPill } from "./styles";
import { Header } from "../../components/Header";
import { Carousel } from "../../components/Carousel";
import { useEffect, useState } from "react";
import { fetchAdById } from "../../services/fetchAdById";
import { formatPrice } from "../../services/formatPrice";

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

export function AdDetails() {
  const { adId } = useParams();
  const location = useLocation();
  const [ad, setAd] = useState<Ad | null>(location.state?.ad || null);
  const [loading, setLoading] = useState(!ad);

  useEffect(() => {
    if (!ad) {
      const getAd = async () => {
        setLoading(true); // Certifica-se de que o loading seja setado para true
        try {
          const fetchedAd = await fetchAdById(adId!);
          setAd(fetchedAd);
        } catch (error) {
          console.error("Error fetching ad:", error);
        } finally {
          setLoading(false);
        }
      };

      getAd();
    }
  }, [ad, adId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!ad) {
    return <p>Anúncio não encontrado</p>;
  }

  return (
    <>
      <Header />
      <AdDetailsContainer>
        <AdDetailsCarousel>
          <Carousel images={ad.images} />
        </AdDetailsCarousel>
        <AdDetailsMainInfo>
          <h3>{ad.title}</h3>
          <span>{formatPrice(ad.price)}</span>
          <AdsPill>
            <span>{ad.category}</span>
          </AdsPill>
        </AdDetailsMainInfo>
        <hr />
        <AdDetailsDescription>
          <h4>Descrição</h4>
          <span>{ad.description}</span>
        </AdDetailsDescription>
        <hr />
        <AdDetailsLocation>
          <h4>Localização</h4>
          <div className="location-wrapper">
            <h4>Município</h4>
            <span>{ad.city}</span>
          </div>
          <div className="location-wrapper">
            <h4>Bairro</h4>
            <span>{ad.neighborhood ? ad.neighborhood : '-'}</span>
          </div>
        </AdDetailsLocation>
        <AdDetailsAder>
          <h4>Informações do anunciante</h4>
          <span className="user-name">Fulaninho da Silva</span>
          <span className="user-phone">84 99999-9999</span>
        </AdDetailsAder>
      </AdDetailsContainer>
    </>
  )
}
