import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html'
})
export class Child3Component implements OnInit {
  childMessage = 'This Is Message From Child3';
  @Output() childMessageEvent = new EventEmitter<string>();
  constructor() {
  }

  ngOnInit() {
  }
  sendMessage() {
    this.childMessageEvent.emit(this.childMessage);
  }

}
