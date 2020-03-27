import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/app.reducers';
import { ToggleTodoAction, EditarTodoAction, EliminarTodoAction } from '../todo.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  public checkFill: FormControl;
  public txtInput: FormControl;
  public editando: boolean;

  @ViewChild('txtinputFisico') txtinputFisico: ElementRef;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.checkFill = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.checkFill.valueChanges.subscribe(() => {
      const actionMarcar = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(actionMarcar);
    })
  }

  public editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtinputFisico.nativeElement.select();
    }, 100);
  }

  public guardarEdicion() {
    if (this.txtInput.invalid) {
      return this.editando = false;
    }

    if (this.txtInput.value === this.todo.texto) {
      return this.editando = false;
    }

    const actionEditar = new EditarTodoAction(this.todo.id, this.txtInput.value);
    this.store.dispatch(actionEditar);
  }

  public eliminarTodo() {
    const actionEliminar = new EliminarTodoAction(this.todo.id);
    this.store.dispatch(actionEliminar);
  }
}
