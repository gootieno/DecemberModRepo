const select = () => {
  /* Write queries for each of the following */

  /* Section 1 */
  // 1. Get all seeded fruit elements
  // Your code here
  const seed = document.querySelectorAll("li.seed");
  console.log("seeded ", seed);
  // 2. Get all seedless fruit elements
  // Your code here

  let seedlessFruit = Array.from(document.getElementsByClassName("seedless"));

  seedlessFruit.forEach((fruit) => console.log("seedless ", fruit));
  // 3. Get first seedless fruit element
  // Your code here
  const firstSeedlessElement =
    document.body.children[1].children[2].children[2];
  console.log("first seedless ", firstSeedlessElement);

  const firstSeedless = document.querySelector(".seedless");
  console.log("first seedless ", firstSeedless);
  /* Section 2 */
  // 4. Get inner span with text "you"
  // Your code here
  const youSpan = document.querySelector("span");
  console.log("you span ", youSpan);
  // 5. Get all children of element "wrapper"
  // Your code here
  const wrapper = document.getElementById("wrapper").children;
  console.log("wrapper children ", wrapper);

  // 6. Get all odd number list items in the list
  // Your code here
  const oddNumbers = document.getElementsByClassName("odd");
  console.log("odd numbers ", oddNumbers);

  // 7. Get all even number list items in the list
  // Your code here
  const evens = Array.from(document.querySelectorAll("ol > li:not(li.odd)"));
  console.log("evens ", evens);
  //   for (let i = 0; i < evens.length; i += 2) {
  //     console.log("evens ", evens[i]);
  //   }
  /* Section 3 */
  // 8. Get all tech companies without a class name
  // Your code here
  const classLessTech = document.querySelector("#three > p > a");
  console.log("classless tech ", classLessTech);
  // 9. Get "Amazon" list element
  // Your code here
  const amazon = document.querySelector("a.shopping");
  console.log("amazon ", amazon);
  // 10. Get all unicorn list elements (not the image element)
  // Your code here
  console.log("unicorn li ", document.querySelectorAll("#three > ul > li"));
};

window.onload = select;
