import { ODataModel } from './models/o-data';

export interface ODataState {
  items: ODataModel[];
  selection: ODataModel;
}

export interface State {
  oData: ODataState;
}
