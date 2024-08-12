let main = document.querySelector(".first");
let second = document.querySelector(".second");
let container = document.querySelector("body");
let startingTime =0;


let finished;

let script = "loading...............................................";

let splitted = script.split("");

let x = 0;
let y = 0;
let z = 7;
let Handsome = setInterval(() => {
  x++;

  main.textContent = splitted.slice(0, x).join("")+'_';
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
      
    }
  }, z);
}, 700);
let blueScreen= setTimeout(() => {
    main.classList.add('hidden');
    second.classList.add('hidden');
}, 6000);

 let welcome = setTimeout(() => {
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    document.querySelector('.openning').style.alignItems = 'center';
    document.querySelector('.openning').style.justifyContent = 'center';
    document.querySelector('.welcome').classList.toggle('opac0');
}, 8000);
let bye = setTimeout(() => {
    document.querySelector('.welcome').classList.toggle('opac0');

},13500);
 setTimeout(() => {
    document.querySelector('.welcome').textContent = 'enjoy';
    document.querySelector('.welcome').classList.toggle('opac0');

},16000);
 setTimeout(() => {
    document.querySelector('.welcome').classList.toggle('opac0');

},18500);


setTimeout(() => {
  document.querySelector('#circle').classList.add('circle');
}, 7500);
setTimeout(() => {
  document.querySelector('#circle').classList.remove('circle');
}, 15500);
 setTimeout(() => {
  document.querySelector('.openning').classList.add('hidden');
  container.style.justifyContent = 'baseline';
}, 20500);

setTimeout(() => {
  document.querySelector('section.mine').classList.remove('hidden');
}, 21500);
setTimeout(() => {
  document.querySelector('section.mine header').classList.remove('opac0');
}, 22000);
setTimeout(() => {
  document.querySelector('section.mine .line').classList.remove('opac0');
}, 22300);
setTimeout(() => {
  document.querySelector('section.mine .no-1').classList.remove('opac0');
}, 22350);
setTimeout(() => {
  document.querySelector('section.mine .no-2').classList.remove('opac0');
}, 22500);
setTimeout(() => {
  document.querySelector('section.mine .no-3').classList.remove('opac0');
}, 22650);

