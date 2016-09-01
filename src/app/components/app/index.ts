import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductListComponent } from '../product-list';
import { EditProductComponent } from '../edit-product';

@Component({
  selector: 'page-title',
  template: '{{ (route.data | async).title }}'
})
export class PageTitleComponent {
  constructor(private route: ActivatedRoute) {
  }
}

export const routes = [
  {
    path: 'product-list',
    children: [
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Product List'
        }
      }
    ]
  },
  {
    path: 'edit-product',
    children: [
      {
        path: ':id',
        component: EditProductComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Edit Product'
        }
      }
    ]
  },
  { path: '', redirectTo: '/product-list', pathMatch: 'full' }
];

@Component({
  selector: 'my-app',
  template: require('./index.html')
})
export class AppComponent {
}
