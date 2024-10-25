import FullList from "../model/FullList";

class ListTemplate {
  private ul: HTMLUListElement;

  constructor(ulId: string) {
    const ulElement = document.getElementById(ulId);
    if (!ulElement || !(ulElement instanceof HTMLUListElement)) {
      throw new Error(
        `Element with id ${ulId} not found or is not a UL element.`
      );
    }
    this.ul = ulElement;
  }

  renderList(fullList: FullList): void {
    this.ul.innerHTML = "";
    fullList.getItems().forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <input type="checkbox" ${item.checked ? "checked" : ""} />
        <label>${item.item}</label>
        <button class="delete" data-id="${item.id}">X</button>
      `;
      this.ul.appendChild(li);
    });
  }
}

export default ListTemplate;
