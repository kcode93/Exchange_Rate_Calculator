//Target elements
const currencyElementOne = document.querySelector('#currency-one');
const currencyElementOneAmnt = document.querySelector('#amount-one');
const currencyElementTwo = document.querySelector('#currency-two');
const currencyElementTwoAmnt = document.querySelector('#amount-two');
const rate = document.querySelector('#rate');
const swap_btn = document.querySelector('#swap');
let counter = 0;


//Exchange Rates & Update DOM
function calculate (){
   console.log(`Hello MTF ${counter}`);
   counter++;
}

//Event Listeners
currencyElementOne.addEventListener('change', calculate);
currencyElementOneAmnt.addEventListener('input', calculate);
currencyElementTwo.addEventListener('change', calculate);
currencyElementTwoAmnt.addEventListener('input', calculate);

//Run Function On Startup
window.addEventListener('DOMContentLoaded', calculate);