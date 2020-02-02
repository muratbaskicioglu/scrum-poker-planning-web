import { defineMessages } from 'react-intl';

export const scope = 'app.view-planning.scrumMasterPanel';

export default defineMessages({
  scrumMasterPanelTitle: {
    id: `${scope}.scrumMasterPanelTitle`,
    defaultMessage: 'Scrum Master Panel',
  },
  voterListHeader: {
    id: `${scope}.voterListHeader`,
    defaultMessage: '{storyName} is {storyStatus}',
  },
  storyList: {
    id: `${scope}.storyList`,
    defaultMessage:
      'Paste your story list(Each line will be converted as a story)',
  },
  endVotingButton: {
    id: `${scope}.endVotingButton`,
    defaultMessage: 'End voting for {storyName}',
  },
  votingEndWarning: {
    id: `${scope}.votingEndWarning`,
    defaultMessage: 'You can not end voting till each teammate voted',
  },
});
