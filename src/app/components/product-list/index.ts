import { Component, Injector } from '@angular/core';

import { ProductListGenerated } from './generated';

@Component({
  selector: 'product-list',
  template: require('./index.html')
})
export class ProductListComponent extends ProductListGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
