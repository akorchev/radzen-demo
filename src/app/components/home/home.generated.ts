import {Injector} from '@angular/core';
import {Grid} from '@radzen/angular';
import {Injector} from '@angular/core';
import {Container} from '@radzen/angular';
import {Injector} from '@angular/core';
import {Form} from '@radzen/angular';
import {Injector} from '@angular/core';
import {Pie} from '@radzen/angular';
import {Injector} from '@angular/core';
import {Container} from '@radzen/angular';
import {Injector} from '@angular/core';
import {Chart} from '@radzen/angular';
import {Injector} from '@angular/core';
import {Container} from '@radzen/angular';
import {ODataService} from '../../services/o-data';

export const DIRECTIVES = [
  Grid, Container, Form, Pie, Container, Chart, Container
];

export const PROVIDERS = [
  ODataService
];

const { components } = require('../../../../meta/pages/home.json');

export class HomeMeta {
  components = components;

  oData: ODataService;

  constructor(injector: Injector) {
    this.oData = injector.get(ODataService);
  }
}
