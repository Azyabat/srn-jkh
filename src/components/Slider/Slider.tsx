"use client";

import React, { useEffect, useState, useRef, FC } from "react";
import { Dot, DotsWrapper, Slide, SliderTrack, SliderWrapper } from "./styled";

const AUTOPLAY_INTERVAL = 5000;

interface Props {
  slides: {
    id: number;
    content: React.ReactNode;
  }[];
  height?: string;
  width?: string;
}

export const Slider: FC<Props> = ({ slides, height, width }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const resetAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(goToNextSlide, AUTOPLAY_INTERVAL);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    resetAutoplay();
  };

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <>
      <SliderWrapper $width={width} className="slider-wrapper">
        <SliderTrack $activeIndex={activeIndex}>
          {slides.map((slide) => (
            <Slide $height={height} key={slide.id}>
              {slide.content}
            </Slide>
          ))}
        </SliderTrack>
      </SliderWrapper>
      <DotsWrapper>
        {slides.map((_, index) => (
          <Dot
            key={index}
            $active={index === activeIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </DotsWrapper>
    </>
  );
};
