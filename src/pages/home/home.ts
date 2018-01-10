import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  componentChoice;

  constructor(public navCtrl: NavController) {

  }

  ionViewWillLoad(){
    this.componentChoice = "one"
  }

}
