import { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

import { Container, MotionInput } from './styles';

export const Input: React.FC<InputProps> = ({ type, children, ...rest }) => {
  return (
    <>
      <Container initial={false}>
        {children}
        <MotionInput type={type} />
      </Container>
    </>
  );
};
