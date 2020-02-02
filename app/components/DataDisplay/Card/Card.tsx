import * as React from 'react';

import * as S from './Card.style';

type CardProps = {
  title: string | React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, children, ...props }) => {
  return (
    <S.Card {...props}>
      {title && <S.CardTitle>{title}</S.CardTitle>}
      {children}
    </S.Card>
  );
};

export default Card;
