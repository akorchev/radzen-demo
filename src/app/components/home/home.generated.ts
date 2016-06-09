import {Injector} from '@angular/core';
import {Grid} from '@radzen/angular';
import {Injector} from '@angular/core';
import {Container} from '@radzen/angular';
import {Injector} from '@angular/core';
import {Form} from '@radzen/angular';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import { ODataService } from '../../services/o-data';
import { ODATA_SELECT } from '../../reducers/odata';
import { ODataState, State } from '../../state';

export const DIRECTIVES = [
  Grid, Container, Form
];

export const PROVIDERS = [
  ODataService
];

const { components } = require('../../../../meta/pages/Home.json');

export class HomeMeta {
  components = components;

  oDataSchema: any;

  store: Store<State>;

  odata: {
    items: Observable<ODataModel[]>,
    selection: Observable<ODataModel>
  };

  odataService: ODataService;

  constructor(injector: Injector) {
    this.odataService = injector.get(ODataService);

    this.store = injector.get(Store);

    const odataState: Observable<ODataState> = this.store.select(state => state.odata);

    this.odata = {
      items: odataState.map(state => state.items),
      selection: odataState.map(state => state.selection)
    };

    this.oDataSchema = this.odataService.schema;
  }

  odataSelect(payload) {
    this.store.dispatch({
      type: ODATA_SELECT,
      payload
    });
  }

  odataSave(payload) {
    this.odataService.update(payload);
  }
}
