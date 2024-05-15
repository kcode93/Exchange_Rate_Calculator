//Target elements
const currencyElementOne = document.querySelector('#currency-one');
const currencyElementOneAmnt = document.querySelector('#amount-one');
const currencyElementTwo = document.querySelector('#currency-two');
const currencyElementTwoAmnt = document.querySelector('#amount-two');
const ratebox = document.querySelector('#rateTarget');
const swap_btn = document.querySelector('#swap');



//Exchange Rates & Update DOM
function calculate (){
   const currOne_val = currencyElementOne.value;
   const currTwo_val = currencyElementTwo.value;

   fetch(`https://open.er-api.com/v6/latest/${currOne_val}`)
   .then(res => res.json())
   .then(data => {
        let localRate = data.rates[currTwo_val].toFixed(4);
        ratebox.innerText = `1 ${currOne_val} = ${localRate} ${currTwo_val}`;

        currencyElementTwoAmnt.value = (currencyElementOneAmnt.value * localRate).toFixed(2);
   });

   
}

//Swaps the Currency Source
function swapCurrency(){
   const temp = currencyElementOne.value;
   currencyElementOne.value = currencyElementTwo.value;
   currencyElementTwo.value = temp;
   calculate();
}

//Event Listeners
currencyElementOne.addEventListener('change', calculate);
currencyElementOneAmnt.addEventListener('input', calculate);
currencyElementTwo.addEventListener('change', calculate);
currencyElementTwoAmnt.addEventListener('input', calculate);
swap_btn.addEventListener('click', swapCurrency);

//Run Function On Startup
window.addEventListener('DOMContentLoaded', calculate);