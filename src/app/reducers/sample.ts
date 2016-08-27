import { combineReducers, ActionReducer, Action } from '@ngrx/store';

import * as models from '../models/sample';

export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const CREATE_PRODUCT_ERROR = 'CREATE_PRODUCT_ERROR';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_ERROR = 'DELETE_PRODUCT_ERROR';
export const GET_PRODUCT_BY_ID_SUCCESS = 'GET_PRODUCT_BY_ID_SUCCESS';
export const GET_PRODUCT_BY_ID_ERROR = 'GET_PRODUCT_BY_ID_ERROR';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_ERROR = 'UPDATE_PRODUCT_ERROR';
export const SELECT_PRODUCT = 'SELECT_PRODUCT';

function productItems(state: Array<models.Product> = [], action: Action) {
  let index;
  let item;

  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return action.payload;
    case CREATE_PRODUCT_SUCCESS:
      return [...state, action.payload];
    case DELETE_PRODUCT_SUCCESS:
      item = state.filter(model => {
        return (
          action.payload.ID == model.ID
        );
      })[0];

      index = state.indexOf(item)

      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    case GET_PRODUCT_BY_ID_SUCCESS:
    case UPDATE_PRODUCT_SUCCESS:
      item = state.filter(model => {
        return (
          action.payload.ID == model.ID
        );
      })[0];

      index = state.indexOf(item)

      if (index >= 0) {
        return [
          ...state.slice(0, index),
          action.payload,
          ...state.slice(index + 1)
        ];
      } else {
        return state;
      }
    default:
      return state;
  }
}

function productSelection(state: models.Product = null, action: Action) {
  switch (action.type) {
    case GET_PRODUCT_BY_ID_SUCCESS:
    case SELECT_PRODUCT:
      return action.payload;
    default:
      return state;
  }
}

export const sample = combineReducers({
  product: combineReducers({
    items: productItems,
    selection: productSelection
  }),
});
