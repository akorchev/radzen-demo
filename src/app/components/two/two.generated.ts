import { Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';


import { State } from '../../state';

export const DIRECTIVES = [
  
];

export const PROVIDERS = [
  
];

const { components } = require('../../../../meta/pages/two.json');

export class TwoMeta {
  components = components;

  store: Store<State>;
  router: Router;


  constructor(injector: Injector) {
    this.store = injector.get(Store);
    this.router = injector.get(Router);

  }

}
