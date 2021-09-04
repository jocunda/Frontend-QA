const input1 = document.getElementById('input1')
// let timer = null
// input1.addEventListener('keyup', function () {
//     if (timer) {
//         clearTimeout(timer)
//     }
//     timer = setTimeout(() => {
//         //trigger change object simulation
//         console.log(input1.value)

//         //clear timeout
//         timer = null
//     }, 500)

// })

function debounce(fn, delay = 500) {
    //timer inside closure
    let timer = null
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn()
            timer = null
        }, delay)
    }
}

input1.addEventListener('keyup', debounce(() => {
    console.log(input1.value)
}), 1000)