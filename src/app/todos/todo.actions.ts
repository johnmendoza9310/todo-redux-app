import { createAction, props } from '@ngrx/store';

export const limpiarTodos = createAction('[TODO] limpiar Todos');
export const crear = createAction(
    '[TODO] Crea todo',
    props<{ texto: string }>() //props es el argumento de la acción
    );

export const toggle = createAction(
        '[TODO] Toggle Todo',
        props<{ id: number }>() 
        );

export const editar = createAction(
        '[TODO] Editar Todo',
        props<{ id: number, texto: string }>() 
        );
export const borrar = createAction(
        '[TODO] Borrar Todo',
        props<{ id: number }>() 
        );

//toggleAll
//completado
export const toggleAll = createAction(
        '[TODO] Toogle TodoAll',
        props<{completado: boolean}>()

);
