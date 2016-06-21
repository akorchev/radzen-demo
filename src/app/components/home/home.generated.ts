import {Injector} from '@angular/core';
import {Grid} from '@radzen/angular';
import {Injector} from '@angular/core';
import {Container} from '@radzen/angular';
import {Injector} from '@angular/core';
import {Form} from '@radzen/angular';
import {ODataService} from '../../services/o-data';

export const DIRECTIVES = [
  Grid, Container, Form
];

export const PROVIDERS = [
  ODataService
];

export class HomeMeta {
    grid0 = {
      col: 6,
      columns: [
        {
          property: "Description",
          title: "Description2"
        },
        {
          property: "DiscontinuedDate",
          title: "DiscontinuedDate"
        },
        {
          property: "ID",
          title: "ID"
        },
        {
          property: "Name",
          title: "Name"
        },
        {
          property: "Price",
          title: "Price"
        },
        {
          property: "Rating",
          title: "Rating"
        },
        {
          property: "ReleaseDate",
          title: "ReleaseDate"
        }
      ],
      dataSource: "OData",
      height: 1137,
      row: 0,
      section: "content"
    };
    form0 = {
      col: 6,
      dataSource: "OData",
      fields: [],
      row: 0,
      section: "content"
    };

  oData: ODataService;

  constructor(injector: Injector) {
    this.oData = injector.get(ODataService);
  }
}
