import { ButtonHTMLAttributes } from 'react';

import { MotionButton } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <>
      <MotionButton
        type="button"
        initial={{ background: '#de5753' }}
        whileHover={{ filter: 'brightness(0.9)', scale: 1.01 }}
        whileTap={{ color: '#333', scale: 0.99 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </MotionButton>
    </>
  );
};
