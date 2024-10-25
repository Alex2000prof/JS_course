import { v4 as uuidv4 } from 'uuid';

interface IListItem {
  id: string;
  item: string;
  checked: boolean;
}

class ListItem implements IListItem {
  id: string;
  item: string;
  checked: boolean;

  constructor(item: string) {
    this.id = uuidv4();
    this.item = item;
    this.checked = false;
  }

  toggleChecked(): void {
    this.checked = !this.checked;
  }
}

export default ListItem;
