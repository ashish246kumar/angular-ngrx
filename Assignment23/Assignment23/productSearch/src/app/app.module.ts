import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { POST_STATE_NAME } from './Posts/state/post.selectors';
import { PostsEffects } from './Posts/state/post.effect';
import { postsReducer } from './Posts/state/post.reducer';
import { PostListComponent } from './Posts/PostList/post-list/post-list.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductSearchComponent } from './Product/ProductFilter/product-search/product-search.component';
import { productSearchReducer } from './Product/ProductFilter/state/search.reducer';
import { ProductSearchEffects } from './Product/ProductFilter/state/search.effect';
import { FilteredProductComponent } from './Product/ProductFilter/filtered-product/filtered-product.component';
import { appReducer } from './store/app.state';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './store/router/custom-serializer';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    ProductSearchComponent,
    FilteredProductComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([ProductSearchEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly:!isDevMode()
    }),
    StoreRouterConnectingModule.forRoot(
      {serializer: CustomSerializer},
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
