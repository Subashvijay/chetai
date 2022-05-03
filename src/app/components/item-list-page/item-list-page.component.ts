import { Component, OnInit } from '@angular/core';
import { createSelector, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddCount, AddItem } from 'src/app/store/item-list.action';
import { AppState, Item } from 'src/app/store/item-list.model';
import { itemsSelector } from 'src/app/store/item-list.selector';

@Component({
  selector: 'app-item-list-page',
  templateUrl: './item-list-page.component.html',
  styleUrls: ['./item-list-page.component.scss']
})
export class ItemListPageComponent implements OnInit {
  public $Items!: Observable<Item[]>;
  count$;
  item: Item = {
    id: 1,
    imgUrl: './assets/img/tomato.jpg',
    name: 'tomato',
    quantityType: "Kg"
  }

  constructor(private store: Store<{ item: AppState }>) {
    this.count$ = store.select("item", 'items');

  }

  ngOnInit(): void {

    this.$Items = this.store.select<Item[]>(itemsSelector);
    this.$Items.subscribe(
      x =>
        console.log(x, 'item')
    )
    this.count$.subscribe(x =>
      console.log(x, 'count')
    )
    this.store.subscribe(x =>
      console.log(x, 'store'))
    this.store.dispatch(AddItem({ item: this.item }))
  }

  add() {
    this.store.dispatch(AddItem({ item: this.item }))
    this.store.dispatch(AddCount())

  }

}
