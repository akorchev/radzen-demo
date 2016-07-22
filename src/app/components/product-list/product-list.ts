import {Component, Injector} from '@angular/core';
import {DIRECTIVES, PROVIDERS, ProductListMeta} from './product-list.generated';

@Component({
    selector: 'product-list',
    template: require('./product-list.html'),
    providers: PROVIDERS.concat([
      // CUSTOM PROVIDERS
    ]),
    directives: DIRECTIVES.concat([
      // CUSTOM DIRECTIVES
    ])
})
export class ProductListComponent extends ProductListMeta {
  constructor(injector: Injector) {
    super(injector);
  }
}
