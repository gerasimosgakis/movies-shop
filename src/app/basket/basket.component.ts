import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/order.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  public orders: Order[] = [
    new Order('Trainspotting', 19.95, 1),
    new Order('A Clockwork Orange', 12.00, 2)
  ];

  constructor() { }

  ngOnInit() {
  }
  
  public onOrderAdded(order: Order) {
    this.orders.push(order);
  }

}
