//Indicará cómo se encuentra el appstate global de la aplicación

import { ActionReducerMap } from "@ngrx/store";

import { Todo } from "./todos/models/todo.model";
import { filtrosValidos } from "./filtro/filtro.actions";
import { todoReducer } from "./todos/todo.reducer";
import { filtroReducer } from "./filtro/filtro.reducer";



export interface AppState{

    todos: Todo[],
    filtro: filtrosValidos
 
}

//se debe indicar el estado que va a manejar <AppState>
export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer, 
    filtro: filtroReducer
}