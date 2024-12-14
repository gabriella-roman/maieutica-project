import React, { useState } from 'react'
import arrowNext from '../../assets/icons/arrow-next.svg'
import arrowPrevious from '../../assets/icons/arrow-back.svg'

interface LogoCarouselProps {
  logos: string[]
}

export function LogoCarousel(props: LogoCarouselProps) {
  const [startIndex, setStartIndex] = useState<number>(0)
  const maxVisible = 6
  const { logos } = props

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % logos.length)
  }

  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex - 1 < 0 ? logos.length - 1 : prevIndex - 1
    )
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        gap: 64,
      }}
    >
      <img
        onClick={prevSlide}
        src={arrowPrevious}
        alt='Previous'
        style={{ cursor: 'pointer' }}
      />

      <div
        style={{
          display: 'flex',
          gap: 18,
          overflowX: 'hidden',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        {logos
          .slice(startIndex, startIndex + maxVisible)
          .map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index}`}
              style={{
                objectFit: 'contain',
                borderRadius: 12,
              }}
            />
          ))}
      </div>

      <img
        onClick={nextSlide}
        src={arrowNext}
        alt='Next'
        style={{ cursor: 'pointer' }}
      />
    </div>
  )
}
