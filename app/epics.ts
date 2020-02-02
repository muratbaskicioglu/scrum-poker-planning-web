import { combineEpics } from 'redux-observable';

import * as addStoryListEpics from 'containers/add-story-list/epic';

export default combineEpics(...Object.values(addStoryListEpics));
