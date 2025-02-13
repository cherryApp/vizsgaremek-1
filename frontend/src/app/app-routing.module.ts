import { NgModule } from '@angular/core';

import { HomeComponent } from './page/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './page/product/product.component';
import { OrderComponent } from './page/order/order.component';
import { UserComponent } from './page/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
