import { Action } from '@ngrx/store';

export const SET_FILTER = '[FILTER] Establecer filtrador.'
export type filtersValids = 'todos' | 'completados' | 'pendientes';

export class SetFiltroAction implements Action {
    type = SET_FILTER;
    constructor(public filtro: filtersValids) { }
}

export type actions = SetFiltroAction;