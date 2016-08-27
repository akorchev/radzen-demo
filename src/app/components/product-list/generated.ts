import { Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { State } from '../../state';

import { SampleService } from '../../services/sample';
import {
  Product
} from '../../models/sample';

import {
  SELECT_PRODUCT
} from '../../reducers/sample';

const { components } = require('../../../../meta/pages/product-list.json');

export class ProductListGenerated {
  components = components;

  store: Store<State>;

  router: Router;

  sampleService: SampleService;

  product: {
    items: Observable<Array<Product>>,
    selection: Observable<Product>
  };

  productNavigate(path: string, product: Product) {
    this.store.dispatch({
      type: SELECT_PRODUCT,
      payload: product
    });

    this.router.navigate([
      path,
      product.ID
    ]);
  }
  constructor(injector: Injector) {
    this.store = injector.get(Store);

    this.router = injector.get(Router);

    this.sampleService = injector.get(SampleService);

    const sample: Observable<any> = this.store.select(state => state.sample);

    const product = sample.map(state => state.product);

    this.product = {
      items: product.map(state => state.items),
      selection: product.map(state => state.selection)
    };

    this.product.items.subscribe(items => {
      if (!items.length) {
        this.sampleService.getProducts();
      }
    }).unsubscribe();
  }
}
