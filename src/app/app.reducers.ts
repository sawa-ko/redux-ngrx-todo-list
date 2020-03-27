import { Todo } from './todo/models/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todo/todo.reducer'
import { filtroReducer } from './filter/filter.reducer'
import { filtersValids } from './filter/filter.actions'

export interface AppState {
    todos: Todo[];
    filtro: filtersValids;
}

export const reducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer
}