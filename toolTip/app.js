const para = document.querySelector('.para');
const info = document.querySelector('.info')



para.addEventListener('mouseover', (e)=>
{
    console.log([e.target.childElementCount])
    info.classList.add('active')
})

para.addEventListener('mouseout', ()=>
{
    
    info.classList.remove('active')
})