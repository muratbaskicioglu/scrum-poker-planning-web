import { ActionType, createReducer } from 'typesafe-actions';
import { combineReducers } from 'redux';
import * as addStoryListActions from './actions';

type AddStoryListActions = ActionType<typeof addStoryListActions>;

const creating = createReducer<boolean, AddStoryListActions>(false)
  .handleAction([addStoryListActions.createSession.request], () => true)
  .handleAction(
    [
      addStoryListActions.createSession.success,
      addStoryListActions.createSession.failure,
    ],
    () => false,
  );

export default combineReducers({ creating });
