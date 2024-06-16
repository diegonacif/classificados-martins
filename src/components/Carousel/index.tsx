import { EmblaCarousel } from './components/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import { EmblaCarouselContainer } from './components/EmblaCarousel/styles'
import car1 from '../../assets/carousel-temp/automobile-8825656_640.jpg'
import car2 from '../../assets/carousel-temp/car-1283947_640.jpg'
import car3 from '../../assets/carousel-temp/car-63930_640.jpg'
import car4 from '../../assets/carousel-temp/opel-5190050_640.jpg'
import car5 from '../../assets/carousel-temp/productExample.jpg'

const OPTIONS: EmblaOptionsType = {}
// const SLIDE_COUNT = 5
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const SLIDES = [
  car1,
  car2,
  car3,
  car4,
  car5,
]

export function Carousel() {
  return (
    <EmblaCarouselContainer>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </EmblaCarouselContainer>
  )
}


