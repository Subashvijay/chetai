import { createSelector } from "@ngrx/store";
import { AppState } from "./item-list.model";



export const itemsSelector = createSelector((state: { item: AppState }) => {
    return state.item.items
}, (items) => items);