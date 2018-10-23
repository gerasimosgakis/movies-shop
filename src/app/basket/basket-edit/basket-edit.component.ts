import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from 'src/app/shared/order.model';
import { BasketService } from '../basket.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-basket-edit',
  templateUrl: './basket-edit.component.html',
  styleUrls: ['./basket-edit.component.scss']
})
export class BasketEditComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private editMode = false;
  private editedItemIndex: number;

  constructor(private basketService: BasketService) { }

  public onAddItem(form: NgForm) {
    const value = form.value;
    const newOrder = new Order(value.title, 10, value.amount);
    this.basketService.addOrder(newOrder);
  }

  ngOnInit() {
    this.subscription = this.basketService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
