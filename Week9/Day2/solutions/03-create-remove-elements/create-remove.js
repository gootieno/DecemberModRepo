/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();

    console.log("data ", data);
    const url = data.message; // URL of new dog image
    console.log("url ", url);

    const breed = url.split("/")[4];
    console.log("dog breed ", breed);

    /*
        <li>
            <figure>
                <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg" />
                <figcaption>hound-afghan</figcaption>
            </figure>
        </li>
    */

    // 0. select live element to append created elements to
    const ul = document.querySelector("ul");
    // 1. create elements
    const li = document.createElement("li");
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");
    // 2. set an attributes on img tag
    img.setAttribute("src", url);
    img.setAttribute("alt", "image of a dog");
    // 3. set innerText on figcaption
    figcaption.innerText = breed;
    // 4. append elements in correct order
    figure.append(img, figcaption);
    li.appendChild(figure);
    ul.appendChild(li);
    /*--------------- Get breed (Hint: Parse from URL) ---------------- */
    // Your code here

    /*------------ Create new dog card with the url above ------------- */
    /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
    // Your code here

    /* Add the new dog card as a child to the ul in the .gallery element */
    // Your code here
  } catch (e) {
    console.log("Couldn't fetch dog :(");
  }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
  /*-------------------- Select the first dog card --------------------- */
  // Your code here
  const first = document.querySelector(".gallery > ul > li");
  /*-------------------- Remove the first dog card --------------------- */
  // Your code here
  first.remove();
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
  /*-------------------- Select the last dog card ----------------------- */
  // Your code here
  const last = document.querySelector(".gallery > ul > li:last-child");
  last.remove();
  /*-------------------- Remove the last dog card ----------------------- */
  // Your code here
});
