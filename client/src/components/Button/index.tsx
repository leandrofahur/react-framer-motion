import { ButtonHTMLAttributes } from 'react';

import { MotionButton } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  background: string;
};

export const Button: React.FC<ButtonProps> = ({
  background,
  children,
  ...rest
}) => {
  return (
    <>
      <MotionButton
        type="button"
        initial={{ background: `${background}` }}
        whileHover={{ filter: 'brightness(0.9)', scale: 1.01, color: '#333' }}
        whileTap={{ color: '#fff', scale: 0.99 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </MotionButton>
    </>
  );
};
