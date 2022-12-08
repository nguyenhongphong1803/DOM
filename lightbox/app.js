const img = document.querySelectorAll('.img')



//     const template =`<div class="modal">
//     <i class="ti-close icon-close"></i>
//     <i class="ti-angle-right next-right"></i>
//     <i class="ti-angle-left next-left"></i>
//     <div class="modal-box">
//         <img class="img-zoom" 
//             src= ${url}
//         alt="">
//     </div>
// </div>`




img.forEach((e)=>{
    e.addEventListener('click', (e) =>{
        
       let url = e.target.currentSrc
      

        let template =`<div class="modal">
        <i class="ti-close icon-close"></i>
        <i class="ti-angle-right next-right"></i>
        <i class="ti-angle-left next-left"></i>
        <div class="modal-box">
            <img class="img-zoom" 
                src= ${url}
            alt="">
        </div>
    </div>`

    document.body.insertAdjacentHTML('afterbegin',template)

        const modal = document.querySelector(".modal")
        const iconClose = document.querySelector(".icon-close")

        // console.log([...img])

        
       
    //    const imgZoom = modal.querySelector('.img-zoom')
    //    const nextRight = modal.querySelector('.next-right')

    //    nextRight.addEventListener('click', () =>{
    //     let index =[...img].findIndex((item) => item === e.target)  
        
        
    //          index = index+1
       
    //    let newUrl =[...img][index].getAttribute('src')

    //         imgZoom.setAttribute('src',newUrl)
    //    })
       

      
        iconClose.addEventListener('click',()=>{     
            modal.classList.add("hide")
            modal.parentElement.appendChild(modal)           
        })
            
    })
    
})

document.body.addEventListener('click', (e)=>{
    

    if(e.target.matches(".next-right")){

        const imgZoom = document.querySelector('.img-zoom')
      
        let index =[...img].findIndex((item) => item.getAttribute('src') === imgZoom.getAttribute('src') ) 
       
             if(index >=3){
                index =0
             } else{
                index = index+1
             }
       
       let newUrl =[...img][index].getAttribute('src')

            imgZoom.setAttribute('src',newUrl)
  
        

    } else if(e.target.matches(".next-left")){
        

        const imgZoom = document.querySelector('.img-zoom')
      
       
        let index =[...img].findIndex((item) => item.getAttribute('src') === imgZoom.getAttribute('src') ) 
       
        
        
            

             if(index >0){
                index = index-1
             } else{
                index =3
             }


       
       let newUrl =[...img][index].getAttribute('src')

            imgZoom.setAttribute('src',newUrl)



    }
         
})










// const imgZoom =document.querySelector(".img-zoom");
// const oldUrl= imgZoom.getAttribute('src')
// const indexNow = [...img].findIndex((item)=>{item === oldUrl})
        