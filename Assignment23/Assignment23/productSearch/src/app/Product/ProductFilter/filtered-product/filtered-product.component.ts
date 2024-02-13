import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../state/search.modle';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getProduct } from '../state/search.selector';

@Component({
  selector: 'app-filtered-product',
  templateUrl: './filtered-product.component.html',
  styleUrls: ['./filtered-product.component.scss']
})
export class FilteredProductComponent implements OnInit{
  products$: Observable<Product[]>;

  constructor(private store: Store<AppState>) {
    this.products$ = this.store.select(getProduct);
  }

  // products!: Observable<Product[]>;
    products!:Product[]
  ngOnInit(): void {

    // this.store.select(getProduct).subscribe((data:any) => {

    //   console.log('product Observable called');
    //   this.products = data;
    //   console.log(this.products[0])
    // });
    // this.products = this.store.select(getProduct);
    this.products$.subscribe(products => {
      console.log('Products updated:', products);
      this.products =products;
    });

    // console.log("**************"+this.products);
  }

}
