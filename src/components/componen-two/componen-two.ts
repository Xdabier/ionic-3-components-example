import { Component } from '@angular/core';

/**
 * Generated class for the ComponenTwoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'componen-two',
  templateUrl: 'componen-two.html'
})
export class ComponenTwoComponent {

  text: string;

  constructor() {
    console.log('Hello ComponenTwoComponent Component');
    this.text = 'Hello user!, this is component number two :)';
  }

}
