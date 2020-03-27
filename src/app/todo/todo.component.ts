import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { MarcarTodoAction } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public completado: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  public toggleAll() {
    this.completado = !this.completado;
    const marcarAllTodo = new MarcarTodoAction(this.completado);
    this.store.dispatch(marcarAllTodo);
  }
}
