import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { ShoppingListItem } from './ShoppingListItem';


@Injectable() 
export class ShoppingListService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private shoppingListItemsUrl = 'http://localhost:8080';  // This should be taken from configuration
 
  constructor(private http: Http) {}
 
  getAll(): Promise<ShoppingListItem[]> {
    return this.http.get(this.shoppingListItemsUrl + "/shopping-list-items")
      .toPromise()
      .then(response => response.json()._embedded.shoppingListItems as ShoppingListItem[])
      .catch(this.handleError);
  }
 
 
  getOne(id: number): Promise<ShoppingListItem> {
    const url = `${this.shoppingListItemsUrl}/shopping-list-items/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as ShoppingListItem)
      .catch(this.handleError);
  }
 
 
  create(shoppingListItem: ShoppingListItem): Promise<ShoppingListItem> {
    return this.http
      .post(this.shoppingListItemsUrl + "/shopping-list-items", JSON.stringify(shoppingListItem), { headers: this.headers })
      .toPromise()
      .then(res => res.json() as ShoppingListItem)
      .catch(this.handleError);
  }
 
  update(shoppingListItem: ShoppingListItem): Promise<ShoppingListItem> {
    return this.http
      .put(`${this.shoppingListItemsUrl}/shopping-list-items/${shoppingListItem.id}`, JSON.stringify(shoppingListItem), { headers: this.headers })
      .toPromise()
      .then(() => shoppingListItem)
      .catch(this.handleError);
  }
 
  delete(shoppingListItem: ShoppingListItem): Promise<void> {
    const url = `${this.shoppingListItemsUrl}/shopping-list-items/${shoppingListItem.id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
 
  private handleError(error: any): Promise<any> {
    console.error('The operation could not be completed', error);
    return Promise.reject(error.message || error);
  }
}