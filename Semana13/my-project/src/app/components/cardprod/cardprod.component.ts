import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cardprod',
  templateUrl: './cardprod.component.html',
  styles: [],
})
export class CardprodComponent implements OnInit {
  @Input() prod: any;
  constructor() {}

  ngOnInit(): void {
    console.log('Por producto', this.prod);
  }
}
