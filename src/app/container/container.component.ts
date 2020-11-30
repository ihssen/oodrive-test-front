import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../shared/models/item';
import { ListItem } from '../shared/models/items';
import { ItemsService } from '../shared/services/items.service';

@Component({
  selector: 'oo-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {

  @Input() items: Item[];
  @Output() loadChildren = new EventEmitter<Item[]>();

  constructor(private itemService: ItemsService) {
  }

  ngOnInit() {
  }

  public getItem(item: Item): void {
    if (item.folder) {
      this.itemService.getChildItems(item.id).subscribe((res: ListItem) => this.items = res.items);
      this.itemService.setPath(item.name);
      this.itemService.setCurrentItemID(item.id);
    } else {
      this.itemService.downloadFile(item.id);
    }
  }

}
