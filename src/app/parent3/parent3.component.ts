import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html'
})
export class Parent3Component implements OnInit {
  message: string;
  constructor() { }

  ngOnInit() {
  }

  receiveMessage($event) {
    this.message = $event;
  }
}
