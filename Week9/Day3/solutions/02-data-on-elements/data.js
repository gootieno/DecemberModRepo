// Your code here
window.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add");

  addButton.addEventListener("click", (event) => {
    event.preventDefault();

    const shoppingList = document.getElementById("shopping-list");

    const type = document.getElementById("type");
    const name = document.getElementById("name");

    const listItem = document.createElement("li");

    // listItem.setAttribute("data-type", type.value);
    listItem.dataset.type = type.value;

    listItem.innerText = name.value;

    shoppingList.append(listItem);
    name.value = "";
  });
});
