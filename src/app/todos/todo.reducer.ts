import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { borrar, crear, editar, limpiarTodos, toggle, toggleAll } from './todo.actions';

export const estadoInicial: Todo[] = [
  new Todo('Salvar el mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar traje Ironman'),
  new Todo('Robar escudo del Capitán América'),
]; //Arreglo vacio de todos

const _todoReducer = createReducer(
  estadoInicial,

  //Recibiendo props de la acción por medio de la desestructuración
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(limpiarTodos, state => state.filter( todo=> !todo.completado)),
  on(borrar, (state, { id }) => state.filter(todo => todo.id !== id)), //regresa todos los todo que sus id sean diferentes al id recibido

  on(toggleAll, (state, { completado }) => {
    return state.map((todo) => {
      return {
        ...todo,
        completado: completado
      }
    })
  }),
  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),
  on(editar, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto,
        };
      } else {
        return todo;
      }
    });
  })
);

export function todoReducer(state: Todo[] | undefined, action: Action) {
  return _todoReducer(state, action);
}
