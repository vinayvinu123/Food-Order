import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrderCreationComponent } from './order-creation/order-creation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/order',
    pathMatch: 'full'
  },
  {
    path: 'order',
    component: OrderCreationComponent,
  },
  {
    path: 'order-List',
    component: OrdersListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
