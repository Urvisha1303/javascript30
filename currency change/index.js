let base_url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
let dropdown = document.querySelectorAll(".dropdown select")
// for(let code in countryList){
//     console.log(code, countryList[code]);
// }

const btn = document.querySelector("form button");
const fromCurr = document.querySelector('.from select');
const toCurr = document.querySelector('.to select');
const msg = document.querySelector('.msg')
// // let i = 0;
for(let select of dropdown){
    for(let code in countryList){
        let newoption = document.createElement('option');
        newoption.innerText = code;
        newoption.value = code
        if(select.name ==="from" && code === 'USD') {
            newoption.selected = "selected";
        }else if (select.name === "to" && code === "INR") { 
            newoption.selected = 'selected';
        }
        select.append(newoption)
        

    }
    select.addEventListener('change', (evt)=>{
        updateFlag(evt.target);
    });
}

const updateExchangeRate  = async ()=>{
    let amoun = document.querySelector('.amount input');
    let amtval = amoun.value;
    if(amtval === "" || amtval < 1 ){
        amtval = 1;
        amoun.value = '1';
    }
    // console.log(fromCurr.value, tocurr.value);
const url = `${base_url}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
let response = await fetch(url);
let data = await response.json();
let rate = data[toCurr.value.toLowerCase()];
let finalamount = amtval * rate;
msg.innerText = `${amtval} ${fromCurr.value} = ${finalamount} ${toCurr.value} `
// console.log(rate);
}

const updateFlag = (element) =>{
// console.log(element);
let currcode = element.value;
// console.log(currcode);
let countryCode = countryList[currcode];
let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`
let img = element.parentElement.querySelector('img');
img.src = newsrc;
};

btn.addEventListener("click", (evt)=> {
    evt.preventDefault();
    updateExchangeRate();

})

window.addEventListener("load", () => {
    updateExchangeRate();
});

