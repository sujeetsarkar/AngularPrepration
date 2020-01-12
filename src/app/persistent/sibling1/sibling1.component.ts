import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html'
})
export class Sibling1Component implements OnInit {
  message: string;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }
  newMessage() {
    this.data.changeMessage('Hello from Sibling1');
  }
}
