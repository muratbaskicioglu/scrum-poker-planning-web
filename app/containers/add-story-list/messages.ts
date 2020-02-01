import { defineMessages } from 'react-intl';

export const scope = 'app.add-story-list';

export default defineMessages({
  sessionName: {
    id: `${scope}.sessionName`,
    defaultMessage: 'Session Name',
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
