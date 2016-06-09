import { ActionReducer, Action } from '@ngrx/store';

import { ODataModel } from '../models/odata';

export const ODATA_READ = 'ODATA_READ';

export const odata: ActionReducer<ODataModel[]> = (state: ODataModel[] = [], action: Action) => {
  switch (action.type) {
    case ODATA_READ:
      return action.payload;

    default:
      return state;
  }
}

export const ODATA_SELECT = 'ODATA_SELECT';

export const odataSelection: ActionReducer<ODataModel> = (state: ODataModel = null, action: Action) => {
  switch (action.type) {
    case ODATA_SELECT:
      return action.payload;
    default:
      return state;
  }
}
