let movie = document.querySelector("select");
let availableSeat = document.querySelectorAll(".fourth .seat:not(.occupied");
let myText = document.querySelector(".fifth p");
let selectedSeats = document.querySelectorAll(".fourth .seat.selected").length;
let savedLocations = [];
function load() {
  loadedSeats = localStorage.getItem("selectedSeats");
  seatsArray = JSON.parse(loadedSeats);
  loadedMovie = localStorage.getItem("selectedMovie");
  movieINT = JSON.parse(loadedMovie);
  movie.value = movieINT;
  savedLocations = seatsArray;

  for (let i = 0; i < seatsArray.length; i++) {
    if (seatsArray[i] == 1) {
      availableSeat[i].classList.add("selected");
    } else {
      availableSeat[i].classList.remove("selected");
    }
  }
  selectedSeats = document.querySelectorAll(".fourth .seat.selected").length;
  calculate(selectedSeats, movie.value);
}
load();
function calculate(numOfSeats, moviePrice) {
  let price = numOfSeats * moviePrice;
  myText.textContent = `you have selected ${numOfSeats} seats for ${price}$`;
}

availableSeat.forEach(function (seat) {
  seat.addEventListener("click", function () {
    this.classList.toggle("selected");
    selectedSeats = document.querySelectorAll(".fourth .seat.selected").length;
    calculate(selectedSeats, movie.value);
    insert();
    save();
  });
});

function insert() {
  for (let i = 0; i < availableSeat.length; i++) {
    if (availableSeat[i].classList.contains("selected")) {
      savedLocations[i] = 1;
    } else {
      savedLocations[i] = 0;
    }
  }
}

function changed() {
  calculate(selectedSeats, movie.value);
  save();
}
function save() {
  SeatsString = JSON.stringify(savedLocations);
  movieString = JSON.stringify(movie.value);
  movieName = JSON.stringify(movie.textContent);
  localStorage.setItem("selectedSeats", SeatsString);
  localStorage.setItem("selectedMovie", movieString);
}

