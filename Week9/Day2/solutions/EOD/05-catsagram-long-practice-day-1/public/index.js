// Your code here
console.log("success");

// https://api.thecatapi.com/v1/images/search

const initializePage = () => {
  const h1 = document.createElement("h1");

  h1.setAttribute("id", "kitten-pic-heading");
  h1.innerText = "Kitten Pic";

  h1.style.textAlign = "center";
  document.body.appendChild(h1);
  createImageContainer();

  // fetch
  getKittenImage();
};

const createImageContainer = () => {
  const div = document.createElement("div");
  const img = document.createElement("img");

  div.setAttribute("id", "kitten-image-container");
  img.setAttribute("id", "kitten-image");
  img.setAttribute("alt", "kitten image");

  div.style.margin = "0 auto";
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.alignItems = "center";

  img.style.width = "400px";

  // dark mode example through toggling
  const button = document.createElement("button");
  button.style.width = "fit-content";
  button.style.marginBottom = "30px";
  button.innerText = "Dark Mode";

  button.addEventListener("click", () => {
    if (document.body.className.includes("darkMode")) {
      document.body.classList.remove("darkMode");
    } else {
      document.body.classList.add("darkMode");
    }
  });
  div.appendChild(button);

  div.appendChild(img);
  document.body.appendChild(div);
};

const getKittenImage = async () => {
  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await response.json();

  console.log("data ", data);

  const kittenUrl = data[0].url;
  console.log("kitten url ", kittenUrl);

  const img = document.getElementById("kitten-image");
  img.setAttribute("src", kittenUrl);
};

window.onload = initializePage;
