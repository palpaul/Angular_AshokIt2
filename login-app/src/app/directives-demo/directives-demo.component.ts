import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.css'],
})
export class DirectivesDemoComponent implements OnInit {
  marks: number = 75;
  myColor: String = '';

  markclass: number = 34;
  myClass: String = '';

  status: boolean = false;
  constructor() {
    //this is  stype directive example
    if (this.marks >= 35) {
      this.myColor = 'green';
    } else this.myColor = 'red';
    //this is ngClass directive example
    if (this.markclass >= 70) {
      this.myClass = 'class1';
    } else {
      this.myClass = 'class2';
    }

    //this is ngClass directive example
    if (this.marks >= 35) {
      this.status = true;
    } else this.status = false;
  }

  ngOnInit(): void {}
}
