import { Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Grid } from '@radzen/angular';
import { ProductsService } from '../../services/products';
import { PRODUCTS_SELECT } from '../../reducers/products';
import { ProductsModel } from '../../models/products';
import { ProductsState } from '../../state';

import { State } from '../../state';

export const DIRECTIVES = [
  Grid
];

export const PROVIDERS = [
  ProductsService
];

const { components } = require('../../../../meta/pages/product-list.json');

export class ProductListMeta {
  components = components;

  store: Store<State>;
  router: Router;

  productsService: ProductsService;

  products: {
    items: Observable<ProductsModel[]>,
    selection: Observable<ProductsModel>,
    schema: any
  };

  productsSelect(payload:any, page:string) {
    this.store.dispatch({
      type: PRODUCTS_SELECT,
      payload
    });

    if (page != null) {
      this.router.navigate([page]);
    }
  }

  productsSave(payload, route) {
    this.productsService.update(payload);
  }

  constructor(injector: Injector) {
    this.store = injector.get(Store);
    this.router = injector.get(Router);

    this.productsService = injector.get(ProductsService);

    const productsState: Observable<ProductsState> = this.store.select(state => state.products);

    this.products = {
      items: productsState.map(state => state.items),
      selection: productsState.map(state => state.selection),
      schema: this.productsService.schema
    };
  }

}
