import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/order.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  orders: Order[] = [
    new Order('Trainspotting', 19.95, 1),
    new Order('A Clockwork Orange', 12.00, 2)
  ];

  constructor() { }

  ngOnInit() {
  }
  public getInfo() {

    return {
        name: 'Gerasimos Gakis',
        email: 'contact@gerasimosgakis.com',
        website: 'gerasimosgakis.com',
        linkedIn: `linkedin.com/in/gerasimosgakis`,
        phone: '+44 7511 62 27 82'
    } ;

  }

}
