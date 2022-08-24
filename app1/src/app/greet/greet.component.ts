import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css'],
})
export class GreetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  //data binding is a technique to send data from component to template  and template to component ok and its 4 tpye of binding ok
  // 1st Interpolation
  // property binding
  // event binding
  // two way binding

  //if I want to perform interpolation (its is used to display var/property value in the tamplate) see the example below
  msg: String = 'Hey welocome hehre Im performing Interpolation databinding.';
}
