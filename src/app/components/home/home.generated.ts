import { Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Grid } from '@radzen/angular';
import { Form } from '@radzen/angular';
import { Pie } from '@radzen/angular';
import { Chart } from '@radzen/angular';
import { ODataService } from '../../services/o-data';
import { ODATA_SELECT } from '../../reducers/o-data';
import { ODataModel } from '../../models/o-data';
import { ODataState } from '../../state';

import { State } from '../../state';

export const DIRECTIVES = [
  Grid, Form, Pie, Chart
];

export const PROVIDERS = [
  ODataService
];

const { components } = require('../../../../meta/pages/home.json');

export class HomeMeta {
  components = components;

  store: Store<State>;
  router: Router;

  oDataService: ODataService;

  oData: {
    items: Observable<ODataModel[]>,
    selection: Observable<ODataModel>,
    schema: any
  };

  oDataSelect(payload:any, page:string) {
    this.store.dispatch({
      type: ODATA_SELECT,
      payload
    });

    if (page != null) {
      this.router.navigate([page]);
    }
  }

  oDataSave(payload, route) {
    this.oDataService.update(payload);
  }

  constructor(injector: Injector) {
    this.store = injector.get(Store);
    this.router = injector.get(Router);

    this.oDataService = injector.get(ODataService);

    const oDataState: Observable<ODataState> = this.store.select(state => state.oData);

    this.oData = {
      items: oDataState.map(state => state.items),
      selection: oDataState.map(state => state.selection),
      schema: this.oDataService.schema
    };
  }

}
