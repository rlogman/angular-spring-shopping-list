export class ShoppingListItem {
  id: number;
  title: string;
  notes?: string;
  bought?: boolean = false;
  showNotes?: boolean = false;

  constructor(title: string, notes?: string) {
    this.title = title;
    this.notes = notes;
  }

}