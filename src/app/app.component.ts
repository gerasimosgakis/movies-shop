import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCfHQMoTlccbSvmm0lmQxSxWhU2EY_xaB0",
      authDomain: "movies-32ee8.firebaseapp.com",
    });
  }
}
