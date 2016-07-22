import {Component, Injector} from '@angular/core';
import {DIRECTIVES, PROVIDERS, ProductDetailsMeta} from './product-details.generated';

@Component({
    selector: 'product-details',
    template: require('./product-details.html'),
    providers: PROVIDERS.concat([
      // CUSTOM PROVIDERS
    ]),
    directives: DIRECTIVES.concat([
      // CUSTOM DIRECTIVES
    ])
})
export class ProductDetailsComponent extends ProductDetailsMeta {
  constructor(injector: Injector) {
    super(injector);
  }
}
