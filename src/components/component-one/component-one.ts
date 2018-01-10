import { Component } from '@angular/core';

/**
 * Generated class for the ComponentOneComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'component-one',
  templateUrl: 'component-one.html'
})
export class ComponentOneComponent {

  text: string;

  constructor() {
    console.log('Hello ComponentOneComponent Component');
    this.text = 'Hello user!, this is component number one :)';
  }

}
