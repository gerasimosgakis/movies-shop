import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/order.model';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  public orders: Order[];
  constructor(private basketService: BasketService) { }

  ngOnInit() {
    this.orders = this.basketService.getOrders();
    this.basketService.ordersChanged
      .subscribe(
        (orders: Order[]) => {
          this.orders = orders;
        }
      );
  }

}
