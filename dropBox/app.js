const header = document.querySelector('.header');
const showTitle =document.querySelector(".show-title")
const wrapperContent = document.querySelector('.wrapper-content');

header.addEventListener('click', handelsubmit);

function handelsubmit(){
    wrapperContent.classList.toggle("active")
}

document.body.addEventListener('click',handleCheck)

function handleCheck(e){
    if(e.target.matches(".new")){
        showTitle.innerHTML ="New Project"
        wrapperContent.classList.remove("active")
        
    } else if(e.target.matches(".view")){
        showTitle.innerHTML ="View Project"
        wrapperContent.classList.remove("active")
    } else if(e.target.matches(".setting")){
        showTitle.innerHTML ="Setting"
        wrapperContent.classList.remove("active")
    }  else if(e.target.matches(".logout")){
        showTitle.innerHTML ="Logout"
        wrapperContent.classList.remove("active")
    } else {
        showTitle.innerHTML ="Show item"
        
    }
    
}