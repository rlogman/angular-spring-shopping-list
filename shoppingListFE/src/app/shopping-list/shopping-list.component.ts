import { Component, OnInit } from '@angular/core';

import { ShoppingListService } from './ShoppingListService';
import { ShoppingListItem } from './ShoppingListItem';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  items: Array<ShoppingListItem>;
  newItem: ShoppingListItem = new ShoppingListItem('');

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingListService.getAll().then(items => { this.items = items; });
    this.newItem = new ShoppingListItem('');
  }
 
  addItem(item: ShoppingListItem): void {
    this.shoppingListService.create(item)
      .then(item => {
        this.items.push(item);
        this.newItem = new ShoppingListItem('');
      });
  }

  updateBought(item: ShoppingListItem): void {
    item.bought = !item.bought;
    this.shoppingListService
      .update(item);
  }

  deleteItem(item: ShoppingListItem): void {
    this.shoppingListService
      .delete(item)
      .then(() => {
        this.items = this.items.filter(h => h !== item);
      });
  }

}
