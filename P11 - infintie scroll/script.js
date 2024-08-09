let height = 0;
let BOBGE = 0;
let myData;
async function load() {
    
    height += 1100;
    BOBGE++;
  await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${BOBGE}`)
    .then((result) => result.json())
    .then((data) => {
      myData = data;
      console.log(BOBGE);
      for (let i = 0; i < data.length; i++) {
      document.querySelector('.main').innerHTML += `<div class="item">
        <h2>${data[i].title}</h2>
        <h4>${data[i].body}</h4>
      </div>`;}
    });
  
};
load();
window.addEventListener("scroll", async function () {
  if (document.documentElement.scrollTop > height) {
    await load();

    console.log(height);
  }
});

