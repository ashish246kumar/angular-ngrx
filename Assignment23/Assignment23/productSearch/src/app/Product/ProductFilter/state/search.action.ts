import { createAction, props } from "@ngrx/store";
import { Product } from "./search.modle";

export const FILTER_PRODUCT = '[filter page] load products';
export const FILTER_PRODUCT_SUCCESS = '[filter page] load products success';

export const loadProduct = createAction(FILTER_PRODUCT,
    props<{ productName?: string; brand?: string,color?:string,price?:number }>());

   
export const loadProductSuccess = createAction(
    FILTER_PRODUCT_SUCCESS,
    props<{ products: Product[] }>()
  );
  