import { defineMessages } from 'react-intl';

export const scope = 'app.add-story-list';

export default defineMessages({
  scrumMasterPanelTitle: {
    id: `${scope}.scrumMasterPanelTitle`,
    defaultMessage: 'Scrum Master Panel',
  },
  voterCount: {
    id: `${scope}.voterCount`,
    defaultMessage: 'Number of voters',
  },
  storyList: {
    id: `${scope}.storyList`,
    defaultMessage:
      'Paste your story list(Each line will be converted as a story)',
  },
  sessionStartButton: {
    id: `${scope}.sessionStartButton`,
    defaultMessage: 'Start Session',
  },
});
