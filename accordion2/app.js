const accordionHeading = document.querySelectorAll(".accordion-heading");
// const accordionContent = document.querySelector(".accordion-content")
const icon = document.querySelectorAll('.icon')
// accordionHeading.addEventListener('click',(e)=>{
//     e.target.nextElementSibling.classList.toggle("active")
// })

// console.log(accordionHeading)

accordionHeading.forEach((e)=> {
   
    e.addEventListener('click', (e) => {
        const content = e.target.nextElementSibling;
       
      
      e.target.lastElementChild.classList.toggle("ti-angle-down")
      e.target.lastElementChild.classList.toggle("ti-angle-up")
      content.style.height = `${content.scrollHeight}px`
      content.classList.toggle("active")
        // console.log(e.target.nextElementSibling.scrollHeight)
        if(!content.classList.contains('active')){
            content.style.height ='0px'
        }

        
        
    })
})