import {Component} from '@angular/core';
import {provideRouter, RouterConfig, ROUTER_DIRECTIVES} from '@angular/router';
import {HomeComponent} from '../home/home';
import {TwoComponent} from '../two/two';
import {ProductDetailsComponent} from '../product-details/product-details';


const routes: RouterConfig = [
    { path: 'home', component: HomeComponent },
  { path: 'two', component: TwoComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
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
     HomeComponent,
     TwoComponent,
     ProductDetailsComponent,
    ]
})
export class AppComponent {
  constructor() {
  }
}
