import { Product } from "./search.modle";

export interface ProductState {
    products: Product[];
  }
  export const initialState: ProductState = {
    products:[],
  };