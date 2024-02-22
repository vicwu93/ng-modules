import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Item, ItemService } from '../../../services/items.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
})
export class ItemsListComponent {
  items: Observable<Item[]>;

  constructor(private itemService: ItemService) {
    this.items = this.itemService.getItems();
  }
}
