import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

import { Row, Col } from 'components/Layout/Grid';

import StoryList from './StoryList';
import ActiveStory from './ActiveStory';
import ScrumMasterPanel from './ScrumMasterPanel';

import * as S from './style';

function ViewPlanning() {
  const isScrumMaster = true;

  return (
    <S.ViewPlanning>
      <Row>
        <img src="" />
      </Row>
      <Row>
        <Col>
          <StoryList />
        </Col>
        <Col>
          <ActiveStory />
        </Col>
        <Col>{isScrumMaster && <ScrumMasterPanel />}</Col>
      </Row>
    </S.ViewPlanning>
  );
}

export default ViewPlanning;
