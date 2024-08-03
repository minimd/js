let movie = document.querySelector("select");
let availableSeat = document.querySelectorAll(".fourth .seat:not(.occupied");
let myText = document.querySelector(".fifth p");
let selectedSeats = document.querySelectorAll(".fourth .seat.selected").length;
function calculate(numOfSeats, moviePrice) {
  let price = numOfSeats * moviePrice;
    myText.textContent = `you have selected ${numOfSeats} seats for ${price}$`;
}
let savedLocasions = []


availableSeat.forEach((seat) => 


    
    
    seat.addEventListener("click", function () {
        // if (seat.classList.contains("selected")) {
        //     savedLocasions.push(1);
        // } else { savedLocasions.push(0) };
        this.classList.toggle("selected");
        selectedSeats = document.querySelectorAll(".fourth .seat.selected").length;
        calculate(selectedSeats, movie.value);
        save()
            ;
        console.log(savedLocasions);
    }),
);




function changed() {
    calculate(selectedSeats, movie.value);
    save();
}
function save() {

    SeatsString = JSON.stringify(selectedSeats);
    movieString = JSON.stringify(movie.value);
    localStorage.setItem("selectedSeats", SeatsString);
    localStorage.setItem("selectedMovie", movieString);
    console.log('saved');
}
// console.log(availableSeat[0].classList[1]);
function sui()
{availableSeat.forEach(e => { 
    if (e.classList.contains('selected')) {
        savedLocasions[e].push(1);
        console.log(savedLocasions[e])
    } else (
      savedLocasions[e].push(1);
        console.log(savedLocasions[e])
)

})}
console.log(savedLocasions);
