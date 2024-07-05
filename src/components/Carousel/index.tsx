import { EmblaCarousel } from './components/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import { EmblaCarouselContainer } from './components/EmblaCarousel/styles'
import imgPlaceholder from "../../assets/img-placeholder.png";

interface ICarousel {
  images: string[]
}

const OPTIONS: EmblaOptionsType = {}

export function Carousel({ images }: ICarousel) {
  const adImages = images
  const altImg = [imgPlaceholder]

  return (
    <EmblaCarouselContainer>
      <EmblaCarousel slides={adImages.length === 0 ? altImg : adImages} options={OPTIONS} />
    </EmblaCarouselContainer>
  )
}


