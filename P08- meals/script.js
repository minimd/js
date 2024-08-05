let searchBar = document.querySelector("input");
let title = document.querySelector("h2");
let mainImage = document.querySelector(".unti img");
let container = document.querySelector("div.container");

let myMeals = [];

let searchText = "";
searchBar.addEventListener("keypress", async function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    event.preventDefault();
    searchText = searchBar.value;
    await search();
    displayImages();
  }
});

async function search() {
  await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  )
    .then((res) => res.json())
    .then((data) => {
      myMeals = data.meals;
    });
}
function displayImages() {
  myMeals.forEach((element) => {
    let newImage = document.createElement("img");
    newImage.setAttribute("src", element.strMealThumb);
    container.appendChild(newImage);
    newImage.addEventListener("click",async function () {
     
        console.log(element.idMeal);
        await fetch(
            `www.themealdb.com/api/json/v1/1/lookup.php?i=${element.idMeal}`
          )
            .then((ss) => ss.json())
            .then((item) => {
              console.log(item);
            });


    });
  });
}
