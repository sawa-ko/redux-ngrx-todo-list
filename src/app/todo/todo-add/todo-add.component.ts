import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { AgregarTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.txtInput = new FormControl('', Validators.required)
  }

  public agregarTodo() {
    if (this.txtInput.invalid) {
      return;
    }

    const agregarTodoAction = new AgregarTodoAction(this.txtInput.value)
    this.store.dispatch(agregarTodoAction);
    this.txtInput.setValue('');
  }
}
