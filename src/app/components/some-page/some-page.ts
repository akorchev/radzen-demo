import {Component, Injector} from '@angular/core';
import {DIRECTIVES, PROVIDERS, SomePageMeta} from './some-page.generated';

@Component({
    selector: 'some-page',
    template: require('./some-page.html'),
    providers: PROVIDERS.concat([
      // CUSTOM PROVIDERS
    ]),
    directives: DIRECTIVES.concat([
      // CUSTOM DIRECTIVES
    ])
})
export class SomePageComponent extends SomePageMeta {
  constructor(injector: Injector) {
    super(injector);
  }
}
