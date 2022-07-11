import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes'; //tipo de datp creado para solo permitir estos
export const setFiltro = createAction(
    '[Filtro] Set Filtro',
    props<{filtro: filtrosValidos}>());

    