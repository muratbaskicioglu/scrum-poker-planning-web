import * as React from 'react';

import * as S from './Textarea.style';

type TextareaProps = {};

const Textarea: React.FC<TextareaProps & React.HTMLAttributes<any>> = ({
  children,
}) => {
  return <S.Textarea>{children}</S.Textarea>;
};

export default Textarea;
