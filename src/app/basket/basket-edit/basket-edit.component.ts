import { Component,
         OnInit,
         OnDestroy,
         ViewChild } from '@angular/core';
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
  @ViewChild('f') basketForm: NgForm;
  private subscription: Subscription;
  public editMode = false;
  private editedItemIndex: number;
  public editedItem: Order;

  constructor(private basketService: BasketService) { }

  public onSubmit(form: NgForm) {
    const value = form.value;
    const newOrder = new Order(value.title, 10, value.amount);
    if (this.editMode) {
      this.basketService.updateMovie(this.editedItemIndex, newOrder);
    } else {
      this.basketService.addOrder(newOrder);
    }
    this.editMode = false;
    form.reset();
  }

  public onClear() {
    this.basketForm.reset();
    this.editMode = false;
  }

  public onDelete() {
    this.basketService.deleteMovie(this.editedItemIndex);
    this.onClear();
  }

  ngOnInit() {
    this.subscription = this.basketService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.basketService.getOrder(index);
          this.basketForm.setValue({
            title: this.editedItem.title,
            amount: this.editedItem.amount
          });
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
