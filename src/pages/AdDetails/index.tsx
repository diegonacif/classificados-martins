import { useParams } from "react-router-dom";
import { AdDetailsAder, AdDetailsCarousel, AdDetailsContainer, AdDetailsDescription, AdDetailsLocation, AdDetailsMainInfo } from "./styles";
// import productExample from "../../assets/productExample.jpg";
import { Header } from "../../components/Header";
import { Carousel } from "../../components/Carousel";
export function AdDetails() {
  const { adId } = useParams();

  return (
    <>
      <Header />
      <AdDetailsContainer>
        <AdDetailsCarousel>
          <Carousel />
          {/* <img src={productExample} alt="" /> */}
        </AdDetailsCarousel>
        <AdDetailsMainInfo>
          <h3>Fiat uno fire todo original sem detalhes {adId}</h3>
          <span>R$ 18.990</span>
        </AdDetailsMainInfo>
        <hr />
        <AdDetailsDescription>
          <h4>Descrição</h4>
          <span>Fiat uno fire zero sem sem detalhes carro de mulher muito novo, todo revisado. Só pegar e andar no ponto de transferir.</span>
        </AdDetailsDescription>
        <hr />
        <AdDetailsLocation>
          <h4>Localização</h4>
          <div className="location-wrapper">
            <h4>CEP</h4>
            <span>59150000</span>
          </div>
          <div className="location-wrapper">
            <h4>Município</h4>
            <span>Natal</span>
          </div>
          <div className="location-wrapper">
            <h4>Bairro</h4>
            <span>Lagoa Nova</span>
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
