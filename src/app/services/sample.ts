import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '../state';

import * as models from '../models/sample';
import * as constants from '../reducers/sample';

import { SampleAuthorizationService } from './sample-authorization';

@Injectable()
export class SampleService {
  constructor(private http: Http, private auth: SampleAuthorizationService ,private store: Store<State>) {
    if (auth.token == null) {
      SampleAuthorizationService.login();
    }
  }

  getProducts() {
    const headers = new Headers();

    headers.append('Accept', 'application/json');
      headers.append('Authorization', `Bearer ${this.auth.token}`);

    this.http.request(`${this.baseUrl}/Products`, {
      method: 'get',
      headers
    })
    .map(response => {
      if (response.url) {
        this.baseUrl = response.url.replace(`/Products`, '');
      }

      switch (response.status) {
        case 200:
          return response.json().value;
        default:
          throw new Error(response.text())
      }
    })
    .catch(payload => {
      this.store.dispatch({
        type: constants.GET_PRODUCTS_ERROR,
        payload
      });

      return Observable.throw(payload);
    })
    .subscribe(payload => {
      this.store.dispatch({
        type: constants.GET_PRODUCTS_SUCCESS,
        payload
      });
    });
  }

  createProduct(product: models.Product) {
    const headers = new Headers();

    headers.append('Accept', 'application/json');
      headers.append('Authorization', `Bearer ${this.auth.token}`);
    headers.append('Content-Type', 'application/json');

    this.http.request(`${this.baseUrl}/Products`, {
      method: 'post',
      headers,
      body: JSON.stringify(product)
    })
    .map(response => {
      if (response.url) {
        this.baseUrl = response.url.replace(`/Products`, '');
      }

      switch (response.status) {
        case 204:
          return product;
        default:
          throw new Error(response.text())
      }
    })
    .catch(payload => {
      this.store.dispatch({
        type: constants.CREATE_PRODUCT_ERROR,
        payload
      });

      return Observable.throw(payload);
    })
    .subscribe(payload => {
      this.store.dispatch({
        type: constants.CREATE_PRODUCT_SUCCESS,
        payload
      });
    });
  }

  deleteProduct(id: number) {
    const headers = new Headers();

    headers.append('Accept', 'application/json');
      headers.append('Authorization', `Bearer ${this.auth.token}`);

    this.http.request(`${this.baseUrl}/Products(${id})`, {
      method: 'delete',
      headers
    })
    .map(response => {
      if (response.url) {
        this.baseUrl = response.url.replace(`/Products(${id})`, '');
      }

      switch (response.status) {
        case 204:
        default:
          throw new Error(response.text())
      }
    })
    .catch(payload => {
      this.store.dispatch({
        type: constants.DELETE_PRODUCT_ERROR,
        payload
      });

      return Observable.throw(payload);
    })
    .subscribe(payload => {
      this.store.dispatch({
        type: constants.DELETE_PRODUCT_SUCCESS,
        payload
      });
    });
  }

  getProductById(id: number) {
    const headers = new Headers();

    headers.append('Accept', 'application/json');
      headers.append('Authorization', `Bearer ${this.auth.token}`);

    this.http.request(`${this.baseUrl}/Products(${id})`, {
      method: 'get',
      headers
    })
    .map(response => {
      if (response.url) {
        this.baseUrl = response.url.replace(`/Products(${id})`, '');
      }

      switch (response.status) {
        case 200:
          return response.json();
        default:
          throw new Error(response.text())
      }
    })
    .catch(payload => {
      this.store.dispatch({
        type: constants.GET_PRODUCT_BY_ID_ERROR,
        payload
      });

      return Observable.throw(payload);
    })
    .subscribe(payload => {
      this.store.dispatch({
        type: constants.GET_PRODUCT_BY_ID_SUCCESS,
        payload
      });
    });
  }

  updateProduct(id: number, product: models.Product) {
    const headers = new Headers();

    headers.append('Accept', 'application/json');
      headers.append('Authorization', `Bearer ${this.auth.token}`);
    headers.append('Content-Type', 'application/json');

    this.http.request(`${this.baseUrl}/Products(${id})`, {
      method: 'patch',
      headers,
      body: JSON.stringify(product)
    })
    .map(response => {
      if (response.url) {
        this.baseUrl = response.url.replace(`/Products(${id})`, '');
      }

      switch (response.status) {
        case 204:
          return product;
        default:
          throw new Error(response.text())
      }
    })
    .catch(payload => {
      this.store.dispatch({
        type: constants.UPDATE_PRODUCT_ERROR,
        payload
      });

      return Observable.throw(payload);
    })
    .subscribe(payload => {
      this.store.dispatch({
        type: constants.UPDATE_PRODUCT_SUCCESS,
        payload
      });
    });
  }

  get baseUrl(): string {
    const url = sessionStorage['SAMPLE_URL'];

    return url || 'http://radzen-data.apphb.com';
  }

  set baseUrl(url: string) {
    sessionStorage['SAMPLE_URL'] = url;
  }
}
