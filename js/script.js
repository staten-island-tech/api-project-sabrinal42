/* console.log("start");
setTimeout(() => {
  console.log("Timer");
}, 3000);
console.log("end");
*/
const url =
  "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b4cfe05213msh3b782994834946cp11738ejsneadededc2674",
    "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
  },
};

const DOMSelectors = {
  choice: document.getElementById("choice"),
  enter: document.getElementById("enter"),
  clear: document.getElementById("clear"),
  div: document.getElementById("div"),
};

function getFood() {
  let food = DOMSelectors.choice.value;
  DOMSelectors.choice.value = "";
  fetch(url + food, options)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      const foodSet = new Set(json.hints);
      console.log([...new Set(foodSet)]);
    });
  DOMSelectors.div.innerHTML = "";
}

/* function getFood() {
  let food = DOMSelectors.choice.value;
  DOMSelectors.choice.value = "";
  fetch(url + food, options)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      if (json.hints.length === 0) {
        DOMSelectors.div.insertAdjacentHTML(
          "beforeend",
          `<p class="innerHTML">Sorry, this food does not exist. Please try again.</p>`
        );
      }
      json.hints.forEach((number) =>
        DOMSelectors.div.insertAdjacentHTML(
          "beforeend",
          `<p class="innerHTML">${number.food.label}</p>
          <img src="${number.food.image}" alt="" class="innerimg">`
        )
      );
    })
    .catch((err) => console.error("error:" + err));
  DOMSelectors.div.innerHTML = "";
} */

DOMSelectors.enter.addEventListener("click", getFood);

window.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    getFood();
  }
});

DOMSelectors.clear.addEventListener("click", function () {
  let innerHTML = document.querySelectorAll(".innerHTML");
  let innerimg = document.querySelectorAll(".innerimg");
  innerHTML.forEach((number) => number.remove());
  innerimg.forEach((number) => number.remove());
});
