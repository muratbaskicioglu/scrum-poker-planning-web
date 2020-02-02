import { from, of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import * as actions from './actions';

import createSession from 'api/session/createSession';

export const pageCheckEpic = action$ =>
  action$.pipe(
    filter(isActionOf(actions.createSession.request)),
    switchMap(action =>
      from(createSession(action.payload)).pipe(
        map(result => {
          console.log('epic, map');
          console.log(result);
          return actions.createSession.success(result);
        }),
        catchError(error => of(actions.createSession.failure(error))),
      ),
    ),
  );
