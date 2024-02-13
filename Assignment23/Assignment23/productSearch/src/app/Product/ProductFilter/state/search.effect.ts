import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductSearchService } from "src/app/Services/product-search.service";
import { loadProduct, loadProductSuccess } from "./search.action";
import { map, mergeMap } from "rxjs";


@Injectable()
export class ProductSearchEffects {
    constructor(private actions$: Actions, private productService:ProductSearchService) {}


    loadProduct$ = createEffect(() =>{
        return this.actions$.pipe(
          ofType(loadProduct),
          mergeMap((action) => {
            return this.productService.getProducts(action.productName,action.brand,action.color,action.price)
            .pipe(
              map((products) => {
                return loadProductSuccess({ products });
              })
            );
          })
        );
      });
      
}