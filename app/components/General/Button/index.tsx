import * as React from 'react';

import * as S from './style';

type ButtonProps = {};

const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<any>> = ({
  children,
  ...props
}) => {
  return <S.Button {...props}>{children}</S.Button>;
};

export default Button;
