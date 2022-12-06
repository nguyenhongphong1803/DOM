const menuPage = document.querySelector('.menu-page');
const menuIcon = document.querySelector('.menu-icon');

const closeIcon = document.querySelector('.close-icon')

menuIcon.addEventListener('click', () => {
    menuPage.classList.toggle('show')
});
closeIcon.addEventListener('click', () => {
    menuPage.classList.remove('show')
} )



const body = document.querySelector('body')

document.addEventListener('click',(e) => {
    // console.log(e.target.contains(menuPage))
    // console.log(e.target.childNodes[2].childNodes[1].childNodes[3])

    
if(menuPage.matches('.show')===true && e.target.contains(menuPage) ){
    menuPage.classList.remove('show')
} 
    

    
})