import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { NgModule } from '@angular/core';
import { FourOFourComponent } from './404/404.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { authGuard } from './auth.guard';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { CartSearchComponent } from './cart-search/cart-search.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';

export const routes: Routes = [
    {
        path:"home",
        component: HomeComponent
    },
    {
        path:"seller-auth",
        component: SellerAuthComponent
    }
    ,
    {
        path:"seller-home",
        component: SellerHomeComponent,
        canActivate : [authGuard]
    },
    {
        path:"seller-add-product",
        component: SellerAddProductComponent,
        canActivate : [authGuard]
    },
    {
        path:"seller-login",
        component: SellerLoginComponent,
    }
    ,
    {
        path:"search/:query",
        component: SearchComponent,
    },
    {
        path:"product/:id",
        component: ProductDetailComponent,
    },
    {
        path:"user-auth",
        component: UserAuthComponent,
    },
    {
        path:"user-login",
        component: UserLoginComponent,
    }
    ,
    {
        path:"cart",
        component: CartSearchComponent,
    }
    ,
    {
        path:"checkout",
        component: CheckoutComponent    }
    ,
    {
        path:"my-orders",
        component: MyOrdersComponent    }
    ,
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path:"**",
        component: FourOFourComponent
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }