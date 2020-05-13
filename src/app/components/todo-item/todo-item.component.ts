import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/Todo';
import { splitClasses } from '@angular/compiler';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  // this is for an input property
  @Input() todo:Todo;
  constructor() { }

  ngOnInit() {
  }

  //SET Dynamic Classes
  setClasses(){
    let classes = {
      todo: true,
       'is-complete':this.todo.completed
       //this todo is related to the todo being past in above in @INPUT

    }
    return classes;
  }

  onToggle(todo){
    todo.completed= !todo.completed; 
  }

  onDelete(todo){
    console.log('Deleteeed')
  }

  
}
