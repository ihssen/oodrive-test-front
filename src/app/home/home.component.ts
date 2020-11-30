import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/models/item';
import { ListItem } from '../shared/models/items';
import { ItemsService } from '../shared/services/items.service';

@Component({
  selector: 'oo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public items: Item[];

	constructor(private itemService: ItemsService) {}

	ngOnInit(): void {
		this.getAllItems();
	}

	private getAllItems() {
		this.itemService.getItems().subscribe((res: ListItem) => {
			this.items = res.items;
		});
  }

  public reload(event: string) :void {
    if (event) {
      this.itemService.getCurrentItemID().subscribe((bool) => {
        this.itemService.getChildItems(bool).subscribe((res: ListItem) => {
          this.items = res.items;
        });
      });
    }
  }

}
