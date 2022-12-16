const list = document.querySelectorAll('li')
const decoration = document.querySelector('.decoration')

list.forEach((e)=>{
    e.addEventListener('mouseenter', function(){
        const cord = e.getBoundingClientRect()
    
        const { top, left, width, height} = cord
        // decoration.style.border = '#000'
        decoration.style.left=`${left}px`
        decoration.style.top =`${top+height}px`
        decoration.style.width =`${width-20}px`
        
       
    
    })
    
    e.addEventListener('mouseleave', function(){
        
        decoration.style.width =`${0}px`
        // decoration.style.border = '#fff'
        
    })

})



