import { Component } from '@angular/core';
import { provideRouter, RouterConfig, ROUTER_DIRECTIVES } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list';
import { ProductStatsComponent } from '../product-stats/product-stats';
import { ProductDetailsComponent } from '../product-details/product-details';


const routes: RouterConfig = [
    { path: 'product-list', component: ProductListComponent },
  { path: 'product-stats', component: ProductStatsComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: '', redirectTo: '/product-list', pathMatch: 'full' }
];

export const appRouterProviders = [
  provideRouter(routes)
];

@Component({
    selector: 'my-app',
    template: require('./app.html'),
    directives: [
      ROUTER_DIRECTIVES
    ],
    precompile: [
     ProductListComponent,
     ProductStatsComponent,
     ProductDetailsComponent,
    ]
})
export class AppComponent {
  constructor() {
  }
}
