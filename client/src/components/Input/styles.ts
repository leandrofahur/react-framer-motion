import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  background: #333;
  color: #fff;

  border: 2px solid #000;
  margin-top: 1rem;

  border-radius: 3px;

  svg {
    height: 20px;
    width: 20px;
    margin: 0 0.5rem;
  }
`;

export const MotionInput = styled(motion.input)`
  flex: 1;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
`;
