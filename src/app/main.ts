import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { RadzenModule } from '@radzen/angular';

import { SampleService } from './services/sample';
import { SampleAuthorizationService } from './services/sample-authorization';
import { sample } from './reducers/sample';

import { ProductListComponent } from './components/product-list';
import { EditProductComponent } from './components/edit-product';

import '../assets/css/styles.css';

import { AppComponent, PageTitleComponent, routes } from './components/app';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.provideStore({
      sample
    }),
    // Because of https://github.com/angular/angular/issues/11233
    RouterModule.forRoot(routes, { useHash: false }),
    FormsModule,
    CommonModule,
    HttpModule,
    RadzenModule
  ],
  declarations: [
    ProductListComponent,
    EditProductComponent,
    AppComponent,
    PageTitleComponent
  ],
  providers: [
    SampleService,
    SampleAuthorizationService,
  ],
  bootstrap: [
    AppComponent
  ]
})
class AppModule {
}

document.addEventListener('DOMContentLoaded', function main() {
  platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    document.querySelector('.sidebar-toggler').addEventListener('click', function(e) {
      e.preventDefault();

      document.body.classList.toggle('sidebar-toggle')
    });
  })
  .catch(err => console.error(err));
});

