import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { Order } from './order-class';

@Component({
  selector: 'app-order-creation',
  templateUrl: './order-creation.component.html',
  styleUrls: ['./order-creation.component.css']
})
export class OrderCreationComponent implements OnInit {
  order: Order;
  userName: string;
  bun = 2;
  cheeseSlice: number;
  salads = false;
  cutlet: number;
  price: number;
  constructor(private orderSvc: OrderService, private route: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    console.log(this.userName);
    this.orderSvc.createOrder(this.userName, this.cheeseSlice, this.salads, this.cutlet);
    console.log(this.orderSvc.OrdersinTotal);
    this.route.navigate(['order-List']);

  }
  // tslint:disable-next-line:typedef
  calculatePrice(){
    this.price = this.orderSvc.calculatePrice(this.cheeseSlice, this.salads, this.cutlet);
  }

}
