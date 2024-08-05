let mainCurrency = document.querySelector("#main-select");
let mainAmount = document.querySelector("#main-input");
let secCurrency = document.querySelector("#sec-select");
let secAmount = document.querySelector("#sec-input");

let rate = document.querySelector(".unpadded");
let convertButton = document.querySelector("#convert-btn");

function calculate() {
  let currency_one = mainCurrency.value;
  let currency_two = secCurrency.value;
  let rates =
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) =>{const ans =data.rates[currency_two];
    rate.textContent = `1 ${currency_one} is equal to ${ans} ${currency_two}`

secAmount.value=(mainAmount.value)*ans;

});

    
}

mainCurrency.addEventListener("change", calculate);
mainAmount.addEventListener("input", calculate);
secCurrency.addEventListener("change", calculate);
secAmount.addEventListener("input", calculate);
convertButton.addEventListener("click", ()=>{
    let temp= mainCurrency.value;
    mainCurrency.value=secCurrency.value;
    secCurrency.value=temp;
    calculate();
});
calculate();
