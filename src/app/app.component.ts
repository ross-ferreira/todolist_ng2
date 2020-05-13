import { Component } from '@angular/core';

// this is for TypeScript to intergrate
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// this is for TypeScript to intergrate



export class AppComponent {
  name:string = 'angular-crash-todolist';

  constructor(){
    this.changeName("Ross");
  }
  // custom  method
  changeName(name:string):void{
    this.name=name;
  }
}

// :string #this is for TypeScript

// We can have methods inside of our Components and one of them is Constructor

// ":void" used so it doesnt return anything