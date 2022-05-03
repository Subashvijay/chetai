import { createAction, props } from "@ngrx/store"
import { Item } from './item-list.model'

export const AddItem = createAction('[ItemList] add item', props<{ item: Item }>());

export const AddCount = createAction('[ItemList] add count')
