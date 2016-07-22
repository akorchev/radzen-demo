import { provide } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { provideRouter, RouterConfig, ROUTER_DIRECTIVES } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { provideStore } from '@ngrx/store';

import { products } from './app/reducers/products';
import './assets/css/styles.css';

/*
 * App Component
 * our top level component that holds all of our components
 */
import {AppComponent, appRouterProviders} from './app/components/app/app';
/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
document.addEventListener('DOMContentLoaded', function main() {
  bootstrap(AppComponent, [
    ...HTTP_PROVIDERS,
    appRouterProviders,
    disableDeprecatedForms(),
    provideForms(),
    provideStore({
      products,
    }),
    provide(LocationStrategy, { useClass: HashLocationStrategy })
  ])
  .then(() => {
    document.querySelector('.sidebar-toggler').addEventListener('click', function(e) {
      e.preventDefault();

      document.body.classList.toggle('sidebar-toggle')
    });
  })
  .catch(err => console.error(err));
});
