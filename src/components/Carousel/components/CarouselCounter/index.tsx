import { Camera } from "@phosphor-icons/react";
import { CarouselCounterContainer } from "./styles";

type PropType = {
  slides: string[]
  currentSnap: number
}

export const CarouselCounter: React.FC<PropType> = (props) => {
  const { slides, currentSnap } = props
  const totalNumber = slides.length

  return (
    <CarouselCounterContainer>
      <Camera size={24} />
      <span>{`${currentSnap} / ${totalNumber}`}</span>
    </CarouselCounterContainer>
  )
}