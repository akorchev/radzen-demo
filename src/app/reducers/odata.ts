import { ActionReducer, Action } from '@ngrx/store';

import { ODataModel } from '../models/odata';

export const ODATA_READ = 'READ';

export const odata: ActionReducer<ODataModel[]> = (state: ODataModel[] = [], action: Action) => {
  switch (action.type) {
    case ODATA_READ:
      return action.payload;

    default:
      return state;
  }
}
