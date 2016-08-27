import { Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { State } from '../../state';

import { SampleService } from '../../services/sample';
import {
  Product
} from '../../models/sample';

const { components } = require('../../../../meta/pages/edit-product.json');

export class EditProductGenerated {
  components = components;

  store: Store<State>;

  route: ActivatedRoute;

  subscription: Subscription;

  sampleService: SampleService;

  product: {
    items: Observable<Array<Product>>,
    selection: Observable<Product>
  };

  ngOnInit() {
    this.product.selection.subscribe(selection => {
      if (!selection) {
        this.subscription = this.route.params.subscribe(params => {
          this.sampleService.getProductById(params['id']);
        });
      }
    });
  }

  productSave(product: Product) {
    this.sampleService.updateProduct(
      product.ID,
      product
    );
  }

  constructor(injector: Injector) {
    this.store = injector.get(Store);

    this.route = injector.get(ActivatedRoute);

    this.sampleService = injector.get(SampleService);

    const sample: Observable<any> = this.store.select(state => state.sample);

    const product = sample.map(state => state.product);

    this.product = {
      items: product.map(state => state.items),
      selection: product.map(state => state.selection)
    };

  }
}
