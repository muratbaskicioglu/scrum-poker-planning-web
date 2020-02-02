import styled, { css } from 'styled-components';

import TextSize from './TextSize.enum';

const smallSizeStyles = css`
  font-size: 10px;
`;

const sizeStyles = {
  [TextSize.SMALL]: smallSizeStyles,
};

const TypographyText = styled.span`
  display: flex;
  padding: 5px;

  ${({ size }) => sizeStyles[size]}
`;

export { TypographyText };
