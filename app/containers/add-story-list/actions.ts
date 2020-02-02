import { createAsyncAction } from 'typesafe-actions';

export const createSession = createAsyncAction(
  `containers/add-story-list/CREATE_SESSION_REQUEST`,
  `containers/add-story-list/CREATE_SESSION_SUCCESS`,
  `containers/add-story-list/CREATE_SESSION_FAILURE`,
)<{ sessionName: string }, boolean, Error>();
