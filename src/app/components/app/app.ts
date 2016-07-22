import {Component} from '@angular/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {HomeComponent} from '../home/home';
import {TwoComponent} from '../two/two';
import {ProductDetailsComponent} from '../product-details/product-details';


@Component({
    selector: 'my-app',
    template: require('./app.html'),
    directives: [
      ROUTER_DIRECTIVES
    ]
})
@RouteConfig([
  
    { path: '/', component: HomeComponent, as: 'Home' },
    { path: '/two', component: TwoComponent, as: 'Two' },
    { path: '/product details', component: ProductDetailsComponent, as: 'ProductDetails' },
])
export class AppComponent {
  constructor(public router:Router) {
  }
}
