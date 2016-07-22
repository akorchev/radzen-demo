import {Component, Injector} from '@angular/core';
import {DIRECTIVES, PROVIDERS, TwoMeta} from './two.generated';

@Component({
    selector: 'two',
    template: require('./two.html'),
    providers: PROVIDERS.concat([
      // CUSTOM PROVIDERS
    ]),
    directives: DIRECTIVES.concat([
      // CUSTOM DIRECTIVES
    ])
})
export class TwoComponent extends TwoMeta {
  constructor(injector: Injector) {
    super(injector);
  }
}
