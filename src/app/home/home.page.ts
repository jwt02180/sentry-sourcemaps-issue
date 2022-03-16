import { Component } from '@angular/core';
import { ViewDidEnter } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements ViewDidEnter {

  constructor() {}

  ionViewDidEnter() {
    throw new Error(`Test Thrown Error`);
  }

}
