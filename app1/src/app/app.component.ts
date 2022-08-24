import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'app1';

  //want to perform all binding  so create fileds and one method ok
  name: String = 'John Rambo';
  age: number = 28;

  handleSubmitBtn() {
    this.name = 'Smith';
    this.age = 30;
  }
}
