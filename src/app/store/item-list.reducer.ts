import { state } from "@angular/animations";
import { createReducer, on, State } from "@ngrx/store";
import { AddCount, AddItem } from "./item-list.action";
import { AppState } from "./item-list.model";

export const initialState: AppState = {
    items: [{
        id: 1,
        imgUrl: './assets/img/tomato.jpg',
        name: 'tomato',
        quantityType: "Kg"
    }],
    count: 0
};
export const itemReducer = createReducer(initialState,
    on(AddItem, (state, { item }) => { return { ...state, items: [...state.items, item] } }),
    on(AddCount, (s) => { return { ...s, count: s.count + 1 } })
);