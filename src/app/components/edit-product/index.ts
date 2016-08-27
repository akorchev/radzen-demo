import { Component, Injector } from '@angular/core';

import { EditProductGenerated } from './generated';

@Component({
  selector: 'edit-product',
  template: require('./index.html')
})
export class EditProductComponent extends EditProductGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
