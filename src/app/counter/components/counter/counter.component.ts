import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

  <h3>Counter: {{counter}}</h3>

  <button (click)="increaseBy(5)">+1</button>
  <button (click)="decreaseBy(5)">-1</button>
  <button (click)="reset()">Reset</button>

  `
})

export class CounterComponent {
  public tittle: string = 'Hola Mundo';
  public counter: number = 10;

  increaseBy(value: number):void{
    this.counter += value;
  }
  decreaseBy(value: number):void{
    this.counter -= value;
  }
  reset():void{
    this.counter = 10;
  }

}
