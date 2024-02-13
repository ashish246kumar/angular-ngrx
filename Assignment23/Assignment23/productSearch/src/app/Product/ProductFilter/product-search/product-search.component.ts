import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { loadProduct } from '../state/search.action';
import { Product } from '../state/search.modle';
import { Observable } from 'rxjs';
import { getProduct } from '../state/search.selector';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
  searchForm!: FormGroup;
  error!:string;
  products!: Observable<Product[]>;
  constructor(private store: Store<AppState>,private router: Router) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      productName: new FormControl(null),
      brand: new FormControl(null),
      color:new FormControl(null),
      price:new FormControl(null),
    });
   
  }
  searchProduct(){
    const productName = this.searchForm.value.productName;
    const brand = this.searchForm.value.brand;
    const color=this.searchForm.value.color;
    const price =this.searchForm.value.price;
    
    if(productName||brand||color||price){
        console.log(productName);
       
        this.store.dispatch(loadProduct({ productName,brand,color,price}));
        this.products = this.store.select(getProduct);
        // console.log(this.products);
        this.error=''
        this.searchForm.reset();
        this.router.navigate(['/Filtered-Product']);
    }
    else{
      this.error='Please Enter at least One Field'
    }
  }

}
