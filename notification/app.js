// const main = document.querySelector('.main')
// setInterval(() => {
//     main.classList.toggle("name")
// },3000)

// 


function notification (randomTitle = "hello"){
    
    const body = document.querySelector('body');

    let template = `<div id="" class="main">
<img src="./assets/image/img.jpg" alt="" class="image" />
<div class="content">
    <h2 class="title" >${randomTitle}</h2>
    <p class="para" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Unde, minus ratione, nihil illum, architecto in inventore 
         iste qui quas quos accusantium earum amet hic iure
          perferendis suscipit fuga voluptate dicta?
    </p>
</div>
</div>`
body.insertAdjacentHTML("afterbegin",template)

}






// let testIndex;
let test =""
const timer = setInterval(()=>{
    const title = ["Hello 1","Hello 2",]

    let randomIndex =Math.floor(Math.random()*title.length)

    let randomTitle = title[randomIndex];


    const item = document.querySelector('.main')
    if(item) {
        item.parentElement.removeChild(item)
    }
    // if(testIndex !== randomIndex)
    
    if(randomTitle !== test)
    notification (randomTitle)
    test= randomTitle
},2000)

