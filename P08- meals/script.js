let searchBar = document.querySelector("input");
let title = document.querySelector("h2");
let mainImage = document.querySelector(".unti img");
let container = document.querySelector("div.container");
let unit = document.querySelector(".unit");



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
  container.classList.remove("hidden");
  container.innerHTML = "";
  unit.classList.add("hidden");
  await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  )
    .then((res) => res.json())
    .then((data) => {
      myMeals = data.meals;
    });
}
async function displayImages() {
  myMeals.forEach((element) => {
    let newImage = document.createElement("img");
    newImage.setAttribute("src", element.strMealThumb);
    container.appendChild(newImage);
    let searchResults = document.querySelectorAll(".container img");

    newImage.addEventListener("click", async function () {
      await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${element.idMeal}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data.meals[0]);
          container.classList.add("hidden");
          unit.classList.remove("hidden");
          unit.innerHTML = `<img src="${data.meals[0].strMealThumb}" alt="" id="unit">
    <h2>
        ${data.meals[0].strMeal}
        
    </h2>
    
    <div class="ingredients">
          <ul>
      
          </ul>
        </div>
        <div class="instructions">
          <p>
          
          </p>
        </div>`;
        let unit_ul = document.querySelector(".ingredients ul");
        let unit_instructions = document.querySelector(".instructions p");
        unit_instructions.textContent =`${data.meals[0].strInstructions}`
          for (let i = 1; i < 20; i++) {
            if (data.meals[0][`strIngredient${i}`]) {
              let ingredient = document.createElement("li");
              ingredient.innerHTML = `${data.meals[0][`strIngredient${i}`]} - ${
                data.meals[0][`strMeasure${i}`]
              }`;
              unit_ul.appendChild(ingredient);
              
            }
          }
        });
    });
  });
}
