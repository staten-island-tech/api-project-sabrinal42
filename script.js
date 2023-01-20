/* console.log("start");
setTimeout(() => {
  console.log("Timer");
}, 3000);
console.log("end");
*/
const url = "pizza-and-desserts.p.rapidapi.com";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "17947fb8camshf7140918c46c720p15405ajsn2b1d36280dd7",
    "X-RapidAPI-Host": "pizza-and-desserts.p.rapidapi.com",
  },
};

const DomSelectors = {
  choice: document.getElementById("choice"),
  enter: document.getElementById("enter"),
  clear: document.getElementById("clear"),
  div: document.getElementById("div"),
};

DomSelectors.enter.addEventListener("click", function () {
  let food = DomSelectors.choice.ariaValueMax;
  fetch(url + food, options)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      json.hints.forEach((number) =>
        DomSelectors.div.insertAdjacentHTML(
          "beforeend",
          `<p class = "innerHTML">${number.food.label}</p>
          <img src="${number.food.image}" alt="" class="innerimg">`
        )
      );
    });
});
