import {Component} from '@angular/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {HomeComponent} from '../home/home';


@Component({
    selector: 'my-app',
    template: require('./app.html'),
    directives: [
      ROUTER_DIRECTIVES
    ]
})
@RouteConfig([
    { path: '/', component: HomeComponent, as: 'Home' },
])
export class AppComponent {
  constructor(public router:Router) {
  }
}
