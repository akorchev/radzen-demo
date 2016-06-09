import { combineReducers, ActionReducer, Action } from '@ngrx/store';

import { ODataModel } from '../models/odata';

export const ODATA_READ = 'ODATA_READ';

const items: ActionReducer<ODataModel[]> = (state: ODataModel[] = [], action: Action) => {
  switch (action.type) {
    case ODATA_READ:
      return action.payload;

    default:
      return state;
  }
}

export const ODATA_SELECT = 'ODATA_SELECT';

const selection: ActionReducer<ODataModel> = (state: ODataModel = null, action: Action) => {
  switch (action.type) {
    case ODATA_SELECT:
      return action.payload;
    default:
      return state;
  }
}

export const odata = combineReducers({ items, selection })
