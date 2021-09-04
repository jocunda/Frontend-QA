//in 3 sec, width from 100px will become 640px, ie. increase by 540px
//60 frames/s, 3s 180 frames, every change 3px

const $div1 = $('#div1')
let curWidth = 100
const maxWidth = 640

setTimeout
function animate() {
    curWidth = curWidth + 3
    $div1.css('width', curWidth)
    if (curWidth < maxWidth) {
        setTimeout(animate, 16.7) //Control time by yourself
    }
}
animate()

//RAF
function animate() {
    curWidth = curWidth + 3
    $div1.css('width', curWidth)
    if (curWidth < maxWidth) {
        window.requestAnimationFrame(animate)  //You don’t need to control the time, the browser controls itself
    }
}
animate()