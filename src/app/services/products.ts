import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Store } from '@ngrx/store';

import { State } from '../state';
import { PRODUCTS_READ } from '../reducers/products';

@Injectable()
export class ProductsService {
  get url() {
    var url = sessionStorage['Products'];

    if (!url) {
      url = 'http://odata-service.apphb.com/Products';

      sessionStorage['Products'] = url;
    }

    return url;
  }

  set url(value) {
    sessionStorage['Products'] = value;
  }

  schema = {
    ID: {
      type: "integer"
    },
    Name: {
      type: "string"
    },
    Description: {
      type: "string"
    },
    ReleaseDate: {
      type: "date"
    },
    DiscontinuedDate: {
      type: "date"
    },
    Rating: {
      type: "integer"
    },
    Price: {
      type: "number"
    }
  };

  constructor(private http: Http, store: Store<State>) {
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    this.http.get(this.url, { headers: headers })
      .map(response => {
        if (response.url) {
          this.url = response.url;
        }

        return response.json()
      })
      .subscribe(data => {
        store.dispatch({
          type: PRODUCTS_READ,
          payload: data.value
        })
      });
  }

  update(item: any) {
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json;charset=utf-8');

    this.http.patch(this.url + '(' + item.ID + ')', JSON.stringify(item), { headers: headers })
      .map(response => {
        if (response.url) {
          this.url = response.url.replace('(' + item.ID + ')', '');
        }
      })
      .subscribe(data => {
      });
  }
}
