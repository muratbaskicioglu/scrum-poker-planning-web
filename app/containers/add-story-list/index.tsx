import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import useInput from 'hooks/useInput';

import { Row, Col } from 'components/Layout/Grid';
import Label from 'components/DataEntry/Label';
import Input from 'components/DataEntry/Input';
import Textarea from 'components/DataEntry/Textarea';
import Button from 'components/General/Button';

import * as actions from './actions';

import messages from './messages';

import * as S from './style';

const dispatcherActionProps = {
  createSession: actions.createSession.request,
};

type AddStoryListProps = typeof dispatcherActionProps & {};

function AddStoryList({ createSession }: AddStoryListProps) {
  const sessionNameInput = useInput();
  const voterCountInput = useState();
  const storyListInput = useState();

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
          <Input id="session-name" maxLength={200} {...sessionNameInput} />
        </Col>
        <Col>
          <Label htmlFor="voter-count">
            <FormattedMessage {...messages.voterCount} />
          </Label>
          <Input.Number
            id="voter-count"
            min={1}
            required
            {...voterCountInput}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Label htmlFor="story-list">
            <FormattedMessage {...messages.storyList} />
          </Label>
          <Textarea id="story-list" rows={10} cols={100} {...storyListInput} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            onClick={() =>
              createSession({ sessionName: sessionNameInput.value })
            }
          >
            <FormattedMessage {...messages.sessionStartButton} />
          </Button>
        </Col>
      </Row>
    </S.Wrapper>
  );
}

const mapStateToProps = null;

export default connect(
  mapStateToProps,
  dispatcherActionProps,
)(AddStoryList);
