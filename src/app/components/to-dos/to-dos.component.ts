import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import {TodoService} from '../../services/todo.service' 

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {

  todos:Todo[];
  // Todo is model

  //NEED to initiliase SERVICES in constructor
  constructor( private todoService:TodoService ) { }

  ngOnInit(){
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
      //=todos; that were RETURNED
    });
  }

}


// ngOnInit(): void {} #Same as Componentdidmount as in REACT

// constructor(){} is used to import service 

//.subscribe same as .then -Asyncronous