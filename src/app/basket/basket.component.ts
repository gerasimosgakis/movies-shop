import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from '../shared/order.model';
import { BasketService } from './basket.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit, OnDestroy {
  public orders: Order[];
  private subscription: Subscription;

  constructor(private basketService: BasketService) { }

  ngOnInit() {
    this.orders = this.basketService.getOrders();
    this.subscription = this.basketService.ordersChanged
      .subscribe(
        (orders: Order[]) => {
          this.orders = orders;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
