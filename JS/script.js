let btnInc = document.querySelector("#incr");
let btnDec = document.querySelector("#decr");
let btnReset = document.querySelector("#reset");
let CountValue = document.querySelector("#CountValue");

let count=0;


btnInc.addEventListener("click",()=>{
    count++;
    CountValue.innerHTML=count;
});

btnDec.addEventListener("click",()=>{
    count--;
    CountValue.innerHTML=count;
});

btnReset.addEventListener("click",()=>{
    count=0;
    CountValue.innerHTML=0;
});