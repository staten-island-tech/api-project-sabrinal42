/* console.log("start");
setTimeout(() => {
  console.log("Timer");
}, 3000);
console.log("end");
*/

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "17947fb8camshf7140918c46c720p15405ajsn2b1d36280dd7",
    "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
  },
};

const URL = "https://dad-jokes.p.rapidapi.com/random/joke";

async function getData(URL) {
  try {
    const response = await fetch(
      "https://dad-jokes.p.rapidapi.com/random/joke",
      options
    );
    const data = await response.json();
    console.log(data);
    document.getElementById("api-response").textContent =
      data.body[0].setup + " " + data.body[0].punchline;
  } catch (error) {
    console.log(error);
  }
}
getData(URL);
