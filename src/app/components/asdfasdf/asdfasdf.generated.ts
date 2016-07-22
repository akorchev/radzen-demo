import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';


import { State } from '../../state';

export const DIRECTIVES = [
  
];

export const PROVIDERS = [
  
];

const { components } = require('../../../../meta/pages/asdfasdf.json');

export class AsdfasdfMeta {
  components = components;

  store: Store<State>;


  constructor(injector: Injector) {
    this.store = injector.get(Store);

  }

}
