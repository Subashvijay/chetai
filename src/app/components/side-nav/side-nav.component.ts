import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, OnChanges {
  @Input() isOpen = false;
  isTamil = false;
  constructor(public translate: TranslateService) { }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
  }

  changeLang() {
    if (this.isTamil) {
      this.translate.use('tn');
    } else {
      this.translate.use('en');

    }
    //this.isTamil = !this.isTamil
  }
}
