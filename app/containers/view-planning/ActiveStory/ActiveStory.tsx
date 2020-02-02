import * as React from 'react';

import Sequence from './Sequence.enum';

import Card from 'components/DataDisplay/Card';
import Deck from './Deck';

import * as S from './ActiveStory.style';

function ActiveStory(props) {
  return (
    <S.ActiveStory>
      <Card title="Active Story">
        <Deck sequence={Deck.Sequence.FIBONACCI} />
        <div>Please Vote!</div>
      </Card>
    </S.ActiveStory>
  );
}

export default ActiveStory;
