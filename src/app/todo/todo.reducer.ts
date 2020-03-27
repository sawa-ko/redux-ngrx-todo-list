import * as fromTodoActions from './todo.actions'
import { Todo } from './models/todo.model';

const estadoInicial: Todo[] = [];

export function todoReducer(state = estadoInicial, action: fromTodoActions.Acciones): Todo[] {
    switch (action.type) {
        case fromTodoActions.AGREGAR_TODO:
            const todo = new Todo(action.texto);
            return [...state, todo];
        case fromTodoActions.TOGGLE_TODO:
            return state.map(todoEdit => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        completado: !todoEdit.completado
                    }
                } else {
                    return todoEdit;
                }
            });
        case fromTodoActions.EDITAR_TODO:
            return state.map(todoEdit => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        texto: action.texto
                    }
                } else {
                    return todoEdit;
                }
            });
        case fromTodoActions.ELIMINAR_TODO:
            return state.filter(todoEdit => todoEdit.id !== action.id);
        case fromTodoActions.MARCAR_ALL_TODO:
            return state.map(todoEdit => {
                return {
                    ...todoEdit,
                    completado: action.completado
                }
            });
        default:
            return state;
    }
}