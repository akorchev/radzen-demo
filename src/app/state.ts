import { ODataModel } from './models/odata';

export interface ODataState {
  items: ODataModel[];
  selection: ODataModel;
}

export interface State {
  odata: ODataState;
}
