import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

import Card from 'components/DataDisplay/Card';
import List from 'components/DataDisplay/List';
import Button from 'components/General/Button';
import Text from 'components/General/Typography/Text';

import * as S from './ScrumMasterPanel.style';

enum VoterType {
  DEVELOPER,
  SCRUM_MASTER,
}

const activeStory = 'storyOne';

const votes = {
  storyOne: [
    {
      name: 'Voter 1',
      type: VoterType.DEVELOPER,
      score: 13,
    },
    {
      name: 'Voter 2',
      type: VoterType.DEVELOPER,
      score: 8,
    },
    {
      name: 'Scrum Master',
      type: VoterType.SCRUM_MASTER,
      score: 21,
    },
  ],
};

const isAllVoted = true;

function ScrumMasterPanel() {
  const scrumMaster = votes[activeStory][2];
  const footer = `${scrumMaster.name}: ${scrumMaster.score}`;
  const title = <FormattedMessage {...messages.scrumMasterPanelTitle} />;
  const header = (
    <FormattedMessage
      {...messages.voterListHeader}
      values={{ storyName: activeStory, storyStatus: 'Active' }}
    />
  );

  return (
    <S.ScrumMasterPanel>
      <Card title={title}>
        <List header={header} footer={footer}>
          {votes[activeStory].map((vote, index) => (
            <List.Item key={index}>
              {vote.name}: {vote.score}
            </List.Item>
          ))}
          <div>Test</div>
        </List>
        <Button>
          <FormattedMessage
            {...messages.endVotingButton}
            values={{ storyName: activeStory }}
          />
        </Button>
        <Text>
          <FormattedMessage {...messages.votingEndWarning} />
        </Text>
      </Card>
    </S.ScrumMasterPanel>
  );
}

export default ScrumMasterPanel;
