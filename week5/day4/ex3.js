let allBoldItems;

function getBoldItems() {
  allBoldItems = document.querySelectorAll("strong");
}
function highlight() {
  for (let i of allBoldItems) {
    i.style.color = "blue";
  }
}
function returnItemsToDefault() {
    for (let i of allBoldItems) {
        i.style.color = 'black';
    }
}
const paragraph = document.querySelector('p');

paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout', returnItemsToDefault);

