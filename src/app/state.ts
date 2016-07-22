import { ProductsModel } from './models/products';

export interface ProductsState {
  items: ProductsModel[];
  selection: ProductsModel;
}

export interface State {
  products: ProductsState;
}
