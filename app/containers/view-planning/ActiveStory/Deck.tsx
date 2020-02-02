import * as React from 'react';

import Sequence from './Sequence.enum';

import PokerCard from './PokerCard';

import * as S from './Deck.style';

const SequenceSymbols = {
  [Sequence.FIBONACCI]: [0, 1, 2, 3, 5, 8, 13, 21, 34, 55],
};

type DeckProps = {
  sequence: Sequence;
};

function Deck({ sequence, ...props }: DeckProps) {
  return (
    <S.Deck {...props}>
      {SequenceSymbols[sequence].map((symbol, index) => (
        <PokerCard key={index} symbol={symbol} />
      ))}
    </S.Deck>
  );
}

Deck.defaultProps = {
  sequence: Sequence.FIBONACCI,
};

Deck.Sequence = Sequence;

export default Deck;
