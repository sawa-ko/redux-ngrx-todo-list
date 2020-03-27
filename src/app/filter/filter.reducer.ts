import * as filtro from './filter.actions'

const estadoInicial: filtro.filtersValids = 'todos';
export function filtroReducer(state = estadoInicial, action: filtro.actions) {
    switch (action.type) {
        case filtro.SET_FILTER:
            return action.filtro;
        default:
            return state;
    }
}