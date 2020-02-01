import * as React from 'react';

import * as S from './style';

type LabelProps = {};

const Label: React.FC<LabelProps & React.LabelHTMLAttributes<any>> = ({
  children,
  ...props
}) => {
  return <S.Label {...props}>{children}</S.Label>;
};

export default Label;
