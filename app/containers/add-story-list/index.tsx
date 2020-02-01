import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

import { Row, Col } from 'components/Layout/Grid';
import Label from 'components/DataEntry/Label';
import Input from 'components/DataEntry/Input';
import Textarea from 'components/DataEntry/Textarea';
import Button from 'components/DataEntry/Button';

import * as S from './style';

function AddStoryList() {
  return (
    <S.Wrapper>
      <Row>
        <img src="" />
      </Row>
      <Row>
        <Col>
          <Label htmlFor="session-name">
            <FormattedMessage {...messages.sessionName} />
          </Label>
          <Input id="session-name" />
        </Col>
        <Col>
          <Label htmlFor="voter-count">
            <FormattedMessage {...messages.voterCount} />
          </Label>
          <Input.Number id="voter-count" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Label htmlFor="story-list">
            <FormattedMessage {...messages.storyList} />
          </Label>
          <Textarea id="story-list" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button>
            <FormattedMessage {...messages.sessionStartButton} />
          </Button>
        </Col>
      </Row>
    </S.Wrapper>
  );
}

export default AddStoryList;
