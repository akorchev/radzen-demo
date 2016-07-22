import {Component, Injector} from '@angular/core';
import {DIRECTIVES, PROVIDERS, DetailsMeta} from './details.generated';

@Component({
    selector: 'details',
    template: require('./details.html'),
    providers: PROVIDERS.concat([
      // CUSTOM PROVIDERS
    ]),
    directives: DIRECTIVES.concat([
      // CUSTOM DIRECTIVES
    ])
})
export class DetailsComponent extends DetailsMeta {
  constructor(injector: Injector) {
    super(injector);
  }
}
