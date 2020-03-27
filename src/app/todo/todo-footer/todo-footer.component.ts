import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { filtersValids, SetFiltroAction } from "../../filter/filter.actions";

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  public filtrosValidos: filtersValids[] = ['terminados', 'activos', 'todos'];
  public filtroActual: string;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
    })
  }

  public cambiarFiltro(nuevoFiltro: filtersValids) {
    const actionCambiarFiltro = new SetFiltroAction(nuevoFiltro);
    this.store.dispatch(actionCambiarFiltro);
  }
}
