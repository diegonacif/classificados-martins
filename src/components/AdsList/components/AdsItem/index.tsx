import { AdsImageWrapper, AdsItemContainer, AdsItemDescription, AdsItemLocation, AdsItemPrice } from "./styles";
import tempImg from "../../../../assets/img-placeholder.png";
import { useNavigate } from "react-router-dom";
import { MapPinArea } from "@phosphor-icons/react";
import { formatPrice } from "../../../../services/formatPrice";

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

interface AdsItemProps {
  ad: Ad;
}

export function AdsItem({ ad }: AdsItemProps) {
  const { id, title, price, city, images } = ad;
  const imageUrl = images[0] || tempImg;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${id}`, { state: { ad } });
  };
  
  return (
    <AdsItemContainer onClick={handleClick}>
      <AdsImageWrapper>
        <img src={imageUrl} alt={title} />
      </AdsImageWrapper>
      <AdsItemPrice>{formatPrice(price)}</AdsItemPrice>
      <AdsItemDescription>{title}</AdsItemDescription>
      <AdsItemLocation><MapPinArea size={16} />{city} - RN</AdsItemLocation>
    </AdsItemContainer>
  )
}