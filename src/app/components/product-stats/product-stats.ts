import {Component, Injector} from '@angular/core';
import {DIRECTIVES, PROVIDERS, ProductStatsMeta} from './product-stats.generated';

@Component({
    selector: 'product-stats',
    template: require('./product-stats.html'),
    providers: PROVIDERS.concat([
      // CUSTOM PROVIDERS
    ]),
    directives: DIRECTIVES.concat([
      // CUSTOM DIRECTIVES
    ])
})
export class ProductStatsComponent extends ProductStatsMeta {
  constructor(injector: Injector) {
    super(injector);
  }
}
