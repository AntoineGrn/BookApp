import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: 'AIzaSyD6hdUOeQ4apIdSr3TMYP2VdhZ_OguVMGw',
      authDomain: 'bookapp-bd079.firebaseapp.com',
      databaseURL: 'https://bookapp-bd079.firebaseio.com',
      projectId: 'bookapp-bd079',
      storageBucket: 'bookapp-bd079.appspot.com',
      messagingSenderId: '57189212349'
    };
  firebase.initializeApp(config);
  }
}
