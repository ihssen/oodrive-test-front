import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ItemsService } from '../shared/services/items.service';

@Component({
  selector: 'oo-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Output() reloadItems = new EventEmitter<boolean>();
  public name: string;
  public createFolder = false;
  public createFile = false;
  constructor(private itemService: ItemsService) {
  }

  ngOnInit() {

  }

  public addFolder(): void {
    this.itemService.createFolder(this.name).subscribe(() => {
      this.createFolder = false;
      this.name = '';
      this.reloadItems.emit(true);
    })
  }

  public onSelectionChange(file: File) {
    this.itemService.uploadFile(file).subscribe(() => {
      this.createFile = false;
      this.name = '';
      this.reloadItems.emit(true);
    });
  }

}
