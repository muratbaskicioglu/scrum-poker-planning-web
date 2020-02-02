import * as React from 'react';
import styled from 'styled-components';

const SPokerCard = styled.div`
  display: inline-flex;
  box-sizing: border-box;
  padding: 10px;
  margin: 5px;
  width: 50px;
  height: 70px;
  background: red;
  color: white;
`;

type PokerCardProps = {
  symbol: any;
};

const PokerCard: React.FC<PokerCardProps> = ({
  symbol,
  children,
  ...props,
}) => {
  return <SPokerCard>{symbol}</SPokerCard>;
};

export default PokerCard;
