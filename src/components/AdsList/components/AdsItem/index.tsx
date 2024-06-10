import { AdsItemContainer, AdsItemDescription, AdsItemLocation, AdsItemPrice } from "./styles";
import tempImg from "../../../../assets/img-placeholder.png";

export function AdsItem() {
  return (
    <AdsItemContainer>
      <img src={tempImg} alt="" />
      <AdsItemPrice>R$ 500,00</AdsItemPrice>
      <AdsItemDescription>Renault Sandero Expression 1.0 2012</AdsItemDescription>
      <AdsItemLocation>Martins - RN</AdsItemLocation>
    </AdsItemContainer>
  )
}