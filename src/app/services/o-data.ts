import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable, BehaviorSubject} from 'rxjs'
import 'rxjs/add/operator/share';
import 'rxjs/operator/startWith';

@Injectable()
export class ODataService {
  subject$: BehaviorSubject<any[]>;
  data$: Observable<any[]>;
  selection$: BehaviorSubject<any>;
  private data: any[];

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

  constructor(private http: Http) {
    this.data = [];

    this.subject$ = new BehaviorSubject(this.data)

    this.selection$ = new BehaviorSubject(null)

    this.data$ = new Observable<any[]>(observer => this.subject$.subscribe(observer))
                      .share();

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
        this.data = data.value;
        this.subject$.next(this.data);
        this.selection = this.data[0];
      });
  }

  public getList() {
    return this.data$;
  }

  public get selection() {
    return this.selection$;
  }

  public set selection(value) {
    this.selection$.next(value);
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
        this.subject$.next(this.data.slice(0));
      });
  }
}
