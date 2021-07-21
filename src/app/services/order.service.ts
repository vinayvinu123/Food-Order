import { Injectable } from '@angular/core';
import { Order } from '../order-creation/order-class';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  OrdersinTotal: Array<Order> = [];
  priceList = {
    bunPrice : 5,
    cheeseSlicePrice : 1,
    saladPrice : 5,
    cutletPrice: 2
  };
  constructor() { }

  // tslint:disable-next-line:typedef
  createOrder(userName, cheeseSlice, salads, cutlet){
    this.OrdersinTotal.push(new Order(userName, cheeseSlice, salads, cutlet));
  }

  // tslint:disable-next-line:typedef
  calculatePrice(cheeseSlice= 0, salads, cutlet){
    console.log(cutlet);
    const  price: number = (2 * this.priceList.bunPrice) +
    (cheeseSlice * this.priceList.cheeseSlicePrice) +
     (salads ? this.priceList.saladPrice : 0 ) + (cutlet * this.priceList.cutletPrice);
    return price;
  }
}
