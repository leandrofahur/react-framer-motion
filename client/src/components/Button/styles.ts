import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MotionButton = styled(motion.button)`
  display: flex;
  flex: 1;
  align-items: center;

  font-size: 1rem;
  font-weight: 400;

  border: none;
  outline: none;
  border-radius: 5px;

  color: #fff;
  /* background: #de5753; */
  padding: 0.5rem 1rem;
  margin-top: 1rem;

  svg {
    height: 20px;
    width: 20px;
    margin-right: 0.5rem;
  }
`;
