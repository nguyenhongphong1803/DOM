const body = document.querySelector('body')
const btn = document.querySelector('.btn')


const handlebtn = function() {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let a = Math.floor(Math.random()*256);
    body.style.backgroundColor = `rgba(${r},${g},${b},${a})`
}

btn.addEventListener('click', handlebtn)