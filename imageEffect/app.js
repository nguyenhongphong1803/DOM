const imageCover = document.querySelector('.image-cover');
const image = document.querySelector('.image');
const imageWrapper = document.querySelector('.image-wrapper');

let imageWrapperWidth = imageWrapper.offsetWidth;
let imageWrapperHeight = imageWrapper.offsetHeight;



imageCover.addEventListener('mousemove', handleHoverImage)

function handleHoverImage (e) {
    image.style = `width:auto; heght:auto; max-height: unset; transform: none`

    let imageWidth = image.offsetWidth;
    console.log(imageWidth)
    let imageHeight = image.offsetHeight;

    let spaceX = (imageWidth/2-imageWrapperWidth)*2;
    let spaceY = (imageHeight/2-imageWrapperHeight)*2;

    imageWidth = imageWidth+spaceX;
    imageHeight = imageHeight+spaceY;

    let ratioX = (imageWidth/imageWrapperWidth)/2
    let ratioY = (imageHeight/imageWrapperHeight)/2

    let pX = e.pageX
    let pY = e.pageY

    let x = (pX-imageWrapper.offsetLeft)*ratioX
    let y = (pY-imageWrapper.offsetTop)*ratioY

    console.log(x)

    image.style.left = `${-x}px`
    image.style.top = `${-y}px`

}

imageCover.addEventListener('mouseleave', handleLeaveImage);

function handleLeaveImage(){
    image.style =""
}

