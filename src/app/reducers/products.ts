import { combineReducers, ActionReducer, Action } from '@ngrx/store';

import { ProductsModel } from '../models/products';

export const PRODUCTS_READ = 'PRODUCTS_READ';

const items: ActionReducer<ProductsModel[]> = (state: ProductsModel[] = [], action: Action) => {
  switch (action.type) {
    case PRODUCTS_READ:
      return action.payload;

    default:
      return state;
  }
}

export const PRODUCTS_SELECT = 'PRODUCTS_SELECT';

const selection: ActionReducer<ProductsModel> = (state: ProductsModel = null, action: Action) => {
  switch (action.type) {
    case PRODUCTS_SELECT:
      return action.payload;
    default:
      return state;
  }
}

export const products = combineReducers({ items, selection })
