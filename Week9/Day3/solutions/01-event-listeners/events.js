// Your code here
window.addEventListener("DOMContentLoaded", () => {
  //   alert("DOM has loaded!");
  const redInput = document.getElementById("red-input");

  const changeRed = (event) => {
    // console.log("event ", event.target.value);
    // console.log("redInput ", redInput.value);
    if (event.target.value.toLowerCase() === "red") {
      event.target.style.backgroundColor = "red";
    } else {
      event.target.style.backgroundColor = "transparent";
    }
  };

  redInput.addEventListener("input", changeRed);

  const addItem = document.getElementById("add-item");

  const createList = () => {
    // value from list add
    const listAdd = document.getElementById("list-add");
    // create a list item
    const listItem = document.createElement("li");
    listItem.innerText = listAdd.value;

    const ul = document.querySelector("#section-2 > ul");

    ul.appendChild(listItem);

    listAdd.value = "";
  };

  addItem.addEventListener("click", createList);

  const selectColor = (event) => {
    const colorSection = document.getElementById("section-3");

    // console.log("color select element value ", colorSelect.value);
    // console.log("event target value ", event.target.value);

    colorSection.style.backgroundColor = event.target.value;
  };

  const colorSelect = document.getElementById("color-select");

  colorSelect.addEventListener("change", selectColor);

  const removeEventListener = document.getElementById("remove-listeners");

  removeEventListener.addEventListener("click", () => {
    redInput.removeEventListener("input", changeRed);
    addItem.removeEventListener("click", createList);

    colorSelect.removeEventListener("change", selectColor);
  });

  const addButton = document.createElement("button");

  const section4 = document.getElementById("section-4");

  section4.append(addButton);

  addButton.innerText = "Add Event Listeners Back";
  addButton.setAttribute("id", "add-button");
  addButton.style.marginTop = "10px";

  addButton.addEventListener("click", () => {
    redInput.addEventListener("input", changeRed);
    addItem.addEventListener("click", createList);

    colorSelect.addEventListener("change", selectColor);
  });
});
