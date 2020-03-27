import * as fromTodoActions from './todo.actions'
import { Todo } from './models/todo.model';

const todo1 = new Todo('Vencer a Thanos.');
const todo2 = new Todo('Salvar al mundo.');

const estadoInicial: Todo[] = [todo1, todo2];

export function todoReducer(state = estadoInicial, action: fromTodoActions.Acciones): Todo[] {
    switch (action.type) {
        case fromTodoActions.AGREGAR_TODO:
            const todo = new Todo(action.texto);
            return [...state, todo];
        default:
            return state;
    }
}