import FullList from "./model/FullList";
import ListTemplate from "./templates/ListTemplate";

const fullList = new FullList();
const listTemplate = new ListTemplate("listItems");

window.addEventListener("DOMContentLoaded", () => {
  fullList.loadFromLocalStorage();
  listTemplate.renderList(fullList);

  document.getElementById("itemEntryForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("newItem") as HTMLInputElement;
    if (input.value) {
      fullList.addItem(input.value);
      input.value = "";
      listTemplate.renderList(fullList);
    }
  });

  document.getElementById("clearItemsButton")?.addEventListener("click", () => {
    fullList.clearList();
    listTemplate.renderList(fullList);
  });

  document.getElementById("listItems")?.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("delete")) {
      const id = target.getAttribute("data-id")!;
      fullList.removeItem(id);
      listTemplate.renderList(fullList);
    }
  });
});
