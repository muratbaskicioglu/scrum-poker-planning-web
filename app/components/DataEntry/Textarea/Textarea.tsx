import * as React from 'react';

import * as S from './Textarea.style';

type TextareaProps = {};

const Textarea: React.FC<TextareaProps & React.TextareaHTMLAttributes<any>> = ({
  children,
  ...props,
}) => {
  return <S.Textarea {...props}>{children}</S.Textarea>;
};

export default Textarea;
