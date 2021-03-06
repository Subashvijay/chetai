import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/store/item-list.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() item: Item = {
    id: 1,
    imgUrl: './assets/img/tomato.jpg',
    name: 'tomato',
    quantityType: "Kg"
  };
  constructor() { }

  ngOnInit(): void {

  }

}
