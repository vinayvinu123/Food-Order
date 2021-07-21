import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Order } from '../order-creation/order-class';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  orderList: Array<Order> = [];
  searchList = [];
  search: string;
  constructor(private orderSvc: OrderService, private route: Router) { }

  ngOnInit(): void {
    this.orderList = this.orderSvc.OrdersinTotal;
  }
  // tslint:disable-next-line:typedef
  searchData(){
    this.orderList = [...this.orderSvc.OrdersinTotal];
    this.orderSvc.OrdersinTotal.forEach((ele, index) => {
      if (!ele.userName.includes(this.search.toLowerCase())){
        this.orderList.splice(index, 1);
      }
    });
  }
  // tslint:disable-next-line:typedef
  returnToHome(){
    this.route.navigate(['order']);
  }

}
