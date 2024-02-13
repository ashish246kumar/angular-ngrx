import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './Posts/PostList/post-list/post-list.component';
import { FilteredProductComponent } from './Product/ProductFilter/filtered-product/filtered-product.component';
import { ProductSearchComponent } from './Product/ProductFilter/product-search/product-search.component';

const routes: Routes = [
  {
    path:'',
    component:ProductSearchComponent
  },
  {
    path:'Filtered-Product',
    component:FilteredProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
