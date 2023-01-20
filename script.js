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
    "X-RapidAPI-Host": "league-of-legends-champions.p.rapidapi.com",
  },
  ,
};

const key = "17947fb8camshf7140918c46c720p15405ajsn2b1d36280dd7";
const url =
  "https://league-of-legends-champions.p.rapidapi.com/champions/en-us?page=0&size=10&name=aatrox&role=fighter";
async function getData(URL) {
  try {
    const response = await fetch(
      "https://league-of-legends-champions.p.rapidapi.com/champions/%7Blang%7D?page=0&size=10&name=aatrox&role=fighter"
    );

    console.log(response);
    const champions = await response.json();
    console.log(champions);
    document.getElementById("api-response").textContent =
      champions.champion_name;
  } catch (error) {
    console.log(error);
  }
}
getData(URL);
