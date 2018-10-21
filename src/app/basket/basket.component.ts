import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  orders = [];

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
