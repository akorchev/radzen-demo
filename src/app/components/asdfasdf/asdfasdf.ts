import {Component, Injector} from '@angular/core';
import {DIRECTIVES, PROVIDERS, AsdfasdfMeta} from './asdfasdf.generated';

@Component({
    selector: 'asdfasdf',
    template: require('./asdfasdf.html'),
    providers: PROVIDERS.concat([
      // CUSTOM PROVIDERS
    ]),
    directives: DIRECTIVES.concat([
      // CUSTOM DIRECTIVES
    ])
})
export class AsdfasdfComponent extends AsdfasdfMeta {
  constructor(injector: Injector) {
    super(injector);
  }
}
