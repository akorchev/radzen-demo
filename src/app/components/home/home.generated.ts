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
    cell0 = {
      columns: 12
    };
    grid0 = {
      columns: [],
      dataSource: "OData"
    };
    cell1 = {
      columns: 12
    };
    form0 = {
      dataSource: "OData",
      fields: [
        {
          property: "Description",
          title: "Description"
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
      ]
    };

  oData: ODataService;

  constructor(injector: Injector) {
    this.oData = injector.get(ODataService);
  }
}
