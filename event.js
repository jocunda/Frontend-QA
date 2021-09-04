//General event binding function 通用事件綁定函數
// function bindEvent(elem, type, fn) {
//     elem.addEventListener(type, fn)
// }

function bindEvent(elem, type, selector, fn) {
    if (fn == null) {
        fn = selector
        selector = null
    }
    elem.addEventListener(type, event => {
        const target = event.target
        if (selector) {
            //delegation bound
            if (target.matches(selector)) {
                fn.call(target, event)
            }
        } else {
            //ordinary bound
            fn.call(target, event)
        }
    })
}

//ordinary bound
const btn1 = document.getElementById('btn1')
bindEvent(btn1, 'click', function (event) {
    console.log(event.target)   //get triggered element
    event.preventDefault()  //Prevent default behavior 阻止默認行爲
    alert(this.innerHTML)
})

// const p1 = document.getElementById('p1')
// bindEvent(p1, 'click', event => {
//     event.stopPropagation()     //Stop Bubbling
//     console.log('active')
// })
// const body = document.body
// bindEvent(body, 'click', event => {
//     console.log('cancel')
//     // console.log(event.target)
// })
// const div2 = document.getElementById('div2')
// bindEvent(div2, 'click', event => {
//     console.log('div2 clicked')
//     console.log(event.target)
// })

//delegation bound
const div3 = document.getElementById('div3')
bindEvent(div3, 'click', 'a', function (event) {
    event.preventDefault()
    alert(this.innerHTML)
})