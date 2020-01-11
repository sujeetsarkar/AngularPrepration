import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked, ElementRef } from '@angular/core';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html'
})
export class Parent2Component implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild(Child2Component, {static: false}) ChildComponentRef: Child2Component;
  @ViewChild('Parent2', {static: false}) ParentEleRef: ElementRef;

  message: string;
  messageAfterViewChecked: string;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.message = this.ChildComponentRef.message;
    console.log(this.ParentEleRef.nativeElement);
  }
  ngAfterViewChecked() {
    this.messageAfterViewChecked = this.ChildComponentRef.message;
  }
}
