import { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

import { Container, MotionInput } from './styles';

export const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  children,
  ...rest
}) => {
  return (
    <>
      <Container initial={{ opacity: 1 }} whileHover={{ opacity: 0.8 }}>
        {children}
        <MotionInput type={type} placeholder={placeholder} />
      </Container>
    </>
  );
};
