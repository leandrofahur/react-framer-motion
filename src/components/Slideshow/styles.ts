import styled from 'styled-components';
import { motion } from 'framer-motion';

import { CgArrowRightO, CgArrowLeftO } from 'react-icons/cg';

export const SlideshowContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const SlideshowImg = styled(motion.img)`
  position: absolute;
  width: 60%;
  height: fit-content;
`;

export const ArrowButton = styled(motion.div)`
  display: flex;
  svg {
    width: 60px;
    height: 60px;
  }
`;

export const LeftArrow = styled(ArrowButton)`
  position: absolute;
  left: 5%;
  z-index: 10;
`;

export const RightArrow = styled(ArrowButton)`
  position: absolute;
  right: 5%;
  z-index: 10;
`;
