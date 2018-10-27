import { NgModule } from "@angular/core";
import { BasketComponent } from "./basket.component";
import { BasketEditComponent } from "./basket-edit/basket-edit.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        BasketComponent,
        BasketEditComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class BasketModule {

}