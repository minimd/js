let ans = document.querySelector(".container");
let spans = document.querySelectorAll("span");
let restart_btn = document.querySelector(".restart");
let end = document.querySelector(".end");
let mistake = document.querySelector(".mistakes");
let lines = document.querySelectorAll(".ll");
let words = [
  "apple",
  "book",
  "cat",
  "dog",
  "fish",
  "house",
  "lamp",
  "moon",
  "shoe",
  "tree",
];
let randomIndex = null;
function chooseWord() {
  randomIndex = Math.floor(Math.random() * words.length);
}
chooseWord();
let word = words[randomIndex];

function makeSpans() {
  for (let i = 0; i < word.length; i++) {
    let span = document.createElement("span");
    ans.appendChild(span);
  }
  spans = document.querySelectorAll("span");
}
makeSpans();
let correctAnswers = [];
let correctAnswersIndex = 0;
let mistakes = 0;
let mistakesLetter = [];

window.addEventListener("keypress", function (e) {
  if (correctAnswers.includes(e.key)) {
    return;
  }
  if (word.includes(e.key)) {
    for (let i = 0; i < word.length; i++) {
      if (e.key === word[i]) {
        spans[i].textContent = word[i];
        correctAnswers.push(e.key);
        correctAnswersIndex++;
      }
    }

  }
  if (word.length == correctAnswersIndex) {
    end.classList.remove("hidden");
  }
  if (!word.includes(e.key) && !mistakesLetter.includes(e.key)) {
    mistakes++;
    for (let i = 0; i < mistakes; i++) {
      lines[i].classList.remove("hidden");
    }
    mistakesLetter.push(e.key);
    mistake.innerHTML += `<p>${e.key}</p>`;
    if (mistakes === 6) {
      end.classList.remove("hidden");
      this.document.querySelector(
        "h1.text"
      ).innerHTML = `you lost.. the word was ${word}`;
    }
  }
});

restart_btn.addEventListener("click", function () {
  location.reload();
});
