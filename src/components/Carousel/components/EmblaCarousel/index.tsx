import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
// import { DotButton, useDotButton } from '../DotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from '../ArrowButton'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { CarouselCounter } from '../CarouselCounter'

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

export const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  // const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
  //   emblaApi,
  //   onNavButtonClick
  // )

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  const [currentSnap, setCurrentSnap] = useState(0);

  const slideInView = useCallback((emblaApi: EmblaCarouselType) => {
    setCurrentSnap(emblaApi.selectedScrollSnap() + 1)
  }, [])

  useEffect(() => {
    if (emblaApi) emblaApi.on('slidesInView', slideInView)
  }, [emblaApi, slideInView])

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__image">
                <img src={index} alt="" />
              </div>
              {/* <div className="embla__slide__number">{index + 1}</div> */}
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <CarouselCounter slides={slides} currentSnap={currentSnap} />

        {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div> */}
      </div>
    </section>
  )
}