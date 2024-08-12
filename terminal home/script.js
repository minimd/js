let main = document.querySelector(".first");
let second = document.querySelector(".second");
let container = document.querySelector("body");
let startingTime =0;

let countdown =setInterval(() => {
    startingTime+=100;
}, 100);
let finished;
console.log(startingTime);

let script = "loading...............................................";

let splitted = script.split("");
console.log("suiiiiiii".split(""));

let x = 0;
let y = 0;
let z = 7;
let Handsome = setInterval(() => {
  x++;

  main.textContent = splitted.slice(0, x).join("")+'_';
  console.log(x);
  if (x >= splitted.length) {
    clearInterval(Handsome);

    console.log("finished handsome");
  }
}, 40);
let megaScript = `

  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>form validation</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="container flex-v">
      <h2>register a new account</h2>
      <div class="flex-v" action="#">
        <div class="row">
          <label for="email">email address:</label>
          <br />
          <input type="text" name="" id="email" /><br />
          <p class="email-error"></p>
        </div>
        <div class="row">
          <label for="username">username:</label>
          <br />
          <input type="text" name="" id="username" /><br />
          <p class="username-error"></p>
        </div>
        <div class="row">
          <label for="password">password:</label>
          <br />
          <input type="password" name="" id="password" /><br />
          <p class="password-error"></p>
        </div>
        <div class="row">
          <label for="passconf">confirm password:</label>
          <br />
          <input type="password" name="" id="passconf" /><br />
          <p class="passconf-error"></p>
        </div>
        <button type="submit" class="submit-btn">submit</button>
      </div>
    </div>
    <script src="app.js"></script>
  </body>
`.split("");
let sui = setTimeout(() => {
  let sui = setInterval(() => {
    y++;
    second.textContent = megaScript.slice(0, y).join("");
    if (y >= megaScript.length) {
      clearInterval(sui);
      
      console.log(startingTime);
    }
  }, z);
}, 700);
let blueScreen= setTimeout(() => {
    main.classList.add('hidden');
    second.classList.add('hidden');
}, 9000);
 let blueScreen2 = setTimeout(() => {
    document.querySelector('.image').classList.add('hidden');
}, 11000);
 let welcome = setTimeout(() => {
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    document.querySelector('.welcome').classList.toggle('opac0');
}, 12000);
let bye = setTimeout(() => {
    document.querySelector('.welcome').classList.toggle('opac0');

},15700);
 setTimeout(() => {
    document.querySelector('.welcome').textContent = 'enjoy';
    document.querySelector('.welcome').classList.toggle('opac0');

},17400);
 setTimeout(() => {
    document.querySelector('.welcome').classList.toggle('opac0');

},21100);


