import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/order.model';
import { BasketService } from '../basket.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basket-edit',
  templateUrl: './basket-edit.component.html',
  styleUrls: ['./basket-edit.component.scss']
})
export class BasketEditComponent implements OnInit {

  constructor(private basketService: BasketService) { }

  ngOnInit() {
  }

  public onAddItem(form: NgForm) {
    const value = form.value;
    const newOrder = new Order(value.title, 10, value.amount);
    this.basketService.addOrder(newOrder);
  }

}
