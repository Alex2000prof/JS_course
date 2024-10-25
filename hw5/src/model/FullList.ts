import ListItem from "./ListItem";

class FullList {
  private list: ListItem[] = [];

  loadFromLocalStorage(): void {
    const data = localStorage.getItem("todoList");
    if (data) {
      this.list = JSON.parse(data);
    }
  }

  saveToLocalStorage(): void {
    localStorage.setItem("todoList", JSON.stringify(this.list));
  }

  addItem(itemText: string): void {
    const item = new ListItem(itemText);
    this.list.push(item);
    this.saveToLocalStorage();
  }

  removeItem(id: string): void {
    this.list = this.list.filter((item) => item.id !== id);
    this.saveToLocalStorage();
  }

  clearList(): void {
    this.list = [];
    this.saveToLocalStorage();
  }

  getItems(): ListItem[] {
    return this.list;
  }
}

export default FullList;
