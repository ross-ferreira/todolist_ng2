import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';

  todosLimit="?_limit=5"

  //we can limit the number returned by ?_limit=5
  
  
  // Have to inject the HTTP MODULE
  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]> {

    // to make the request see below:
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }
}

// Dummy Data no Longer Needed
// return [
//   {
//     id:1,
//     title: "Todo 1",
//     completed: false, 
//   },
//   {
//     id:2,
//     title: "Todo two",
//     completed: true, 
//   },
//   {
//     id:3,
//     title: "Todo three ",
//     completed: false, 
//   }
// ]