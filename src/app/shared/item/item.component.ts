import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'oo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;
  constructor() { }

  ngOnInit() {
  }

}
