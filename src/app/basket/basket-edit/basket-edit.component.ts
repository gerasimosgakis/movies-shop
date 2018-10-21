import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Order } from 'src/app/shared/order.model';

@Component({
  selector: 'app-basket-edit',
  templateUrl: './basket-edit.component.html',
  styleUrls: ['./basket-edit.component.scss']
})
export class BasketEditComponent implements OnInit {
  @ViewChild('titleInput') titleInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() orderAdded = new EventEmitter<Order>();

  constructor() { }

  ngOnInit() {
  }

  public onAddItem() {
    const orderName = this.titleInputRef.nativeElement.value;
    const orderAmount = this.amountInputRef.nativeElement.value;
    const newOrder = new Order(orderName, 10, orderAmount);
    this.orderAdded.emit(newOrder);
  }

}
