import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ItemsService } from '../shared/services/items.service';

@Component({
	selector: 'oo-path',
	templateUrl: './path.component.html',
	styleUrls: ['./path.component.scss']
})
export class PathComponent {

	public currentId: string;
	public path: Observable<string>;

	constructor(public itemService: ItemsService) {
    this.path = this.itemService.getPath();
	}


}
