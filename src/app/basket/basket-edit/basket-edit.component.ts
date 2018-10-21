import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Order } from 'src/app/shared/order.model';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-basket-edit',
  templateUrl: './basket-edit.component.html',
  styleUrls: ['./basket-edit.component.scss']
})
export class BasketEditComponent implements OnInit {
  @ViewChild('titleInput') titleInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private basketService: BasketService) { }

  ngOnInit() {
  }

  public onAddItem() {
    const orderName = this.titleInputRef.nativeElement.value;
    const orderAmount = this.amountInputRef.nativeElement.value;
    const newOrder = new Order(orderName, 10, orderAmount);
    this.basketService.addOrder(newOrder);
  }

}
