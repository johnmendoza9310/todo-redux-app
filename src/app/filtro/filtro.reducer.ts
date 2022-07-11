import { Action, createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';

export const initialState = 'todos' as filtrosValidos;



// reducer creado como actualmente se crea según documentación
const _filtroReducer = createReducer(initialState,
    on(setFiltro, (state: filtrosValidos, {filtro}) => filtro),
);

export function filtroReducer(state: filtrosValidos | undefined, action: Action) {
    return _filtroReducer(state, action)
}



