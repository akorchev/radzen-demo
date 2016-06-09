import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store';

import { State } from '../state';
import { ODATA_READ, ODATA_SELECT } from '../reducers/odata';
import { ODataModel } from '../models/odata';

@Injectable()
export class ODataService {
  data$: Observable<any>;
  selection$: Observable<any>;

  get url() {
    var url = sessionStorage['OData'];

    if (!url) {
      url = 'http://odata-service.apphb.com/Products';

      sessionStorage['OData'] = url;
    }

    return url;
  }

  set url(value) {
    sessionStorage['OData'] = value;
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
    Price: {}
  };

  constructor(private http: Http, private store: Store<State>) {
    this.data$ = store.select('odata');
    this.selection$ = store.select('odataSelection');

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
        store.dispatch( {
          type: ODATA_READ,
          payload: data.value
        })
      });
  }

  public getList() {
    return this.data$;
  }

 public get selection() {
    return this.selection$;
  }

  public set selection(payload) {
    this.store.dispatch({
      type: ODATA_SELECT,
      payload
    })
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
