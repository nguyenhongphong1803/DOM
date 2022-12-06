// const template =` <button class="sign" >-</button>
// <p class="num" >1</p>
// <button class="sign" >+</button>`

// function getclass(clas) {
//     document.querySelector(clas)
// };
// const main = getclass('main');
// const pushdown = getclass('pushdown');
// const pushup = getclass('pushup');
// const num = getclass('num');


        // <button class="pushdown" >-</button>
        // <p class="num" >1</p>
        // <button class="pushup" >+</button>

const main = document.querySelector('.main');

const pushdown = document.createElement('button');
const pushup = document.createElement('button');
const num = document.createElement('p');

let numcontent =0;

main.appendChild(pushdown);
main.appendChild(num);
main.appendChild(pushup);
 pushdown.classList.add("pushdown");
 pushup.classList.add("pushup");
 num.classList.add("num");

 pushdown.textContent="-";
 pushup.textContent="+";
 num.textContent= numcontent;

 pushup.addEventListener('click', clickOnup)

pushdown.addEventListener('click',clickOndown )

function clickOndown (){
    if(numcontent <= 0){
        num.textContent = 0
    } else {
        numcontent =numcontent-1;
        num.textContent = numcontent;
    }
    
}

function clickOnup (){
    numcontent =numcontent+1
    num.textContent = numcontent
}




