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
    width: 40px;
    height: 40px;
  }
`;

export const LeftArrow = styled(ArrowButton)`
  position: absolute;
  left: 10%;
  z-index: 1;
`;

export const RightArrow = styled(ArrowButton)`
  position: absolute;
  right: 10%;
  z-index: 1;
`;
