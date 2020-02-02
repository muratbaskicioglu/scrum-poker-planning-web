import * as React from 'react';

import TextSize from './TextSize.enum';

import * as S from './Text.style';

type TypographyTextProps = {
  size: TextSize;
};

const TypographyText: React.FC<TypographyTextProps> = ({
  children,
  ...props,
}) => {
  return <S.TypographyText {...props}>{children}</S.TypographyText>;
};

TypographyText.defaultProps = {
  size: TextSize.SMALL,
};

export default TypographyText;
