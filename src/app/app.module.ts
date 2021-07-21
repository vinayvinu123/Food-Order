import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderCreationComponent } from './order-creation/order-creation.component';
import { FormsModule } from '@angular/forms';
import { OrdersListComponent } from './orders-list/orders-list.component';
@NgModule({
  declarations: [
    AppComponent,
    OrderCreationComponent,
    OrdersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
