import React, { useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';

import { CgArrowRightO, CgArrowLeftO } from 'react-icons/cg';

import {
  SlideshowContainer,
  SlideshowImg,
  LeftArrow,
  RightArrow,
} from './styles';

interface ISlideshowProps {
  imgUrlList: string[];
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -10000,
      opacity: 0,
    };
  },
};

export const Slideshow: React.FC<ISlideshowProps> = ({ imgUrlList }) => {
  const [[page, direction], setSlide] = useState<[number, number]>([0, 0]);
  const index = wrap(0, imgUrlList.length, page);

  const passTheSlide = (next: number) => {
    return setSlide([page + next, next]);
  };

  return (
    <SlideshowContainer>
      <LeftArrow
        initial={{
          backgroundColor: 'rgba(245,245,245,0.2)',
          borderRadius: '50%',
        }}
        whileHover={{
          scale: 1.05,
          cursor: 'pointer',
          backgroundColor: 'rgba(245,245,245,0.7)',
        }}
        whileTap={{ scale: 0.95, backgroundColor: 'rgba(245,245,245,0.2)' }}
        onClick={() => passTheSlide(-1)}
      >
        <CgArrowLeftO />
      </LeftArrow>
      <AnimatePresence initial={false} custom={direction}>
        <SlideshowImg
          key={page}
          src={imgUrlList[index]}
          variants={variants}
          custom={direction}
          initial='enter'
          animate='center'
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 100 },
            opacity: { duration: 0.2 },
          }}
          exit='exit'
        />
      </AnimatePresence>
      <RightArrow
        initial={{
          backgroundColor: 'rgba(245,245,245,0.2)',
          borderRadius: '50%',
        }}
        whileHover={{
          scale: 1.05,
          cursor: 'pointer',
          backgroundColor: 'rgba(245,245,245,0.7)',
        }}
        whileTap={{ scale: 0.95, backgroundColor: 'rgba(245,245,245,0.2)' }}
        onClick={() => passTheSlide(1)}
      >
        <CgArrowRightO />
      </RightArrow>
    </SlideshowContainer>
  );
};
