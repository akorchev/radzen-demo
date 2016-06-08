import {Component, Injector} from '@angular/core';
import {DIRECTIVES, PROVIDERS, HomeMeta} from './home.generated';

@Component({
    selector: 'home',
    template: require('./home.html'),
    providers: PROVIDERS.concat([
      // CUSTOM PROVIDERS
    ]),
    directives: DIRECTIVES.concat([
      // CUSTOM DIRECTIVES
    ])
})
export class HomeComponent extends HomeMeta {
  constructor(injector: Injector) {
    super(injector);
  }
}
