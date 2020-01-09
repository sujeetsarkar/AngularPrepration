import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit {

  constructor() { }
  parentMessageVariable = 'This is the message from parent';
  ngOnInit() {
  }

}
