import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, OnChanges {
  @Input() isOpen = false;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
  }

}
