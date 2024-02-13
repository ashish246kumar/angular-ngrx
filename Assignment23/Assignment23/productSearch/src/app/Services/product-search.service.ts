import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Product/ProductFilter/state/search.modle';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductSearchService {

  private apiUrl = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { 

  }
  getProducts(productName?: string,brand?: string,color?:string, price?: number):Observable<Product[]>{
    let params = new HttpParams();
    
    if (productName !== null && productName !== undefined) {
      console.log("productName");
      params = params.set('productName', productName);
    }
    if (brand !== null && brand !== undefined) {
      console.log("brand");
      params = params.set('brand', brand);
    }
    if (color !== null && color !== undefined) {
      console.log("color");
      params = params.set('color', color);

    }

    if (price !== null && price !== undefined) {
      params = params.set('price', price.toString());
    }
    console.log(this.apiUrl+"?"+params.toString())
    return this.http.get<Product[]>(this.apiUrl, { params })
  .pipe(
    map(data => {
      const products: Product[] = [];
      for (let key in data) {
       
          products.push({ ...data[key] });
        
      }
      return products;
    })
  );

  }

}

// getProducts(productName?:string):Observable<Product[]>{
 
//   let params = new HttpParams();

//     if (productName !== null && productName !== undefined) {
//       console.log("productName");
//       params = params.set('productName', productName);
//     }
  
//   return this.http.get<Product[]>(this.apiUrl, { params })
// .pipe(
//   map(data => {
//     const products: Product[] = [];
//     for (let key in data) {
     
//         products.push({ ...data[key] });
      
//     }
//     return products;
//   })
// );

// }

// }

