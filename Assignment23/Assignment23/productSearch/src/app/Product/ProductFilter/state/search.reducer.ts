import { Action, createReducer, on } from "@ngrx/store";
import { initialState } from "./search.state";
import { loadProductSuccess } from "./search.action";

const _productSearchReducer = createReducer(initialState,
    on(loadProductSuccess, (state, action) => {
      console.log(action.products)
        return {
          ...state,
          products: action.products,
        };
      })
    )


export function productSearchReducer(state:any,action:Action) {
    return _productSearchReducer(state, action);
  }