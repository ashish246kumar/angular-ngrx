import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './search.state';
export const PRODUCT_STATE_NAME = 'products';
const productsState = createFeatureSelector<ProductState>(PRODUCT_STATE_NAME);

export const getProduct = createSelector(productsState, (state) => {
  return state.products;
});
