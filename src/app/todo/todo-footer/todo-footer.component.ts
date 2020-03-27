import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { filtersValids, SetFiltroAction } from "../../filter/filter.actions";
import { Todo } from '../models/todo.model';
import { EliminarTodosCompletadosAction, FiltrarTodosAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  public filtrosValidos: filtersValids[] = ['terminados', 'activos', 'todos'];
  public filtroActual: string;
  public pendientes: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.conteoPendientes(state.todos);
    })
  }

  public cambiarFiltro(nuevoFiltro: filtersValids) {
    const actionCambiarFiltro = new SetFiltroAction(nuevoFiltro);
    const actionFiltro = new FiltrarTodosAction(nuevoFiltro);

    this.store.dispatch(actionCambiarFiltro);
    this.store.dispatch(actionFiltro);
  }

  public conteoPendientes(todo: Todo[]) {
    this.pendientes = todo.filter(todo => !todo.completado).length;
  }

  public eliminarCompletados() {
    const actionEliminarCompleatados = new EliminarTodosCompletadosAction();
    this.store.dispatch(actionEliminarCompleatados);
  }
}
