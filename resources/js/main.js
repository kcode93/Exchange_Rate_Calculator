//Target elements
const currencyElementOne = document.querySelector('#currency-one');
const currencyElementOneAmnt = document.querySelector('#amount-one');
const currencyElementTwo = document.querySelector('#currency-two');
const currencyElementTwoAmnt = document.querySelector('#amount-two');
const rate = document.querySelector('#rate');
const swap_btn = document.querySelector('#swap');



//Exchange Rates & Update DOM
function calculate (){
   const currOne_val = currencyElementOne.value;
   const currTwo_val = currencyElementTwo.value;

   fetch(`https://open.er-api.com/v6/latest/${currOne_val}`)
   .then(res => res.json())
   .then(data => {
        console.log(data);
   });
}

//Event Listeners
currencyElementOne.addEventListener('change', calculate);
currencyElementOneAmnt.addEventListener('input', calculate);
currencyElementTwo.addEventListener('change', calculate);
currencyElementTwoAmnt.addEventListener('input', calculate);

//Run Function On Startup
window.addEventListener('DOMContentLoaded', calculate);