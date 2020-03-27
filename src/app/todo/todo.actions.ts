import { Action } from "@ngrx/store";
import { filtersValids } from '../filter/filter.actions';

export const AGREGAR_TODO = '[TODO] Agregar todo.';
export const EDITAR_TODO = '[TODO] Editar todo.';
export const ELIMINAR_TODO = '[TODO] Eliminar todo.';
export const TOGGLE_TODO = '[TODO] Toggle todo.';
export const MARCAR_ALL_TODO = '[TODO] Marcar todo.';
export const ELIMINAR_ALL_TODO_COMPLETE = '[TODO] Completar tareas completadas.';
export const FILTRAR_TODO = '[TODO] Filtrando Todo.';

export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;
    constructor(public texto: string) { }
}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;
    constructor(public id: number) { }
}

export class EditarTodoAction implements Action {
    readonly type = EDITAR_TODO;
    constructor(public id: number, public texto: string) { }
}

export class EliminarTodoAction implements Action {
    readonly type = ELIMINAR_TODO;
    constructor(public id: number) { }
}

export class MarcarTodoAction implements Action {
    readonly type = MARCAR_ALL_TODO;
    constructor(public completado: boolean) { }
}

export class EliminarTodosCompletadosAction implements Action {
    readonly type = ELIMINAR_ALL_TODO_COMPLETE;
    constructor() { }
}

export class FiltrarTodosAction implements Action {
    readonly type = FILTRAR_TODO;
    constructor(public filtro: filtersValids) { }
}

export type Acciones = AgregarTodoAction | ToggleTodoAction | EditarTodoAction | EliminarTodoAction | MarcarTodoAction | EliminarTodosCompletadosAction | FiltrarTodosAction;