// const arr = [10, 20, 30, 40, 50]

// //pop
// const popRes = arr.pop()
// console.log(popRes, arr)

// //shift
// const shiftRes = arr.shift()
// console.log(shiftRes, arr)

// //push
// const pushRes = arr.push(50)  //return length
// console.log(pushRes, arr)

// //unshift
// const unshiftRes = arr.unshift(5) //return length
// console.log(unshiftRes, arr)


// //concat
// const arr1 = arr.concat([50, 60, 70])
// console.log(arr1)
// //map
// const arr2 = arr.map(num => num * 10)
// console.log(arr2)
// //filter
// const arr3 = arr.filter(num => num > 25)
// console.log(arr3)
// //slice
// const arr4 = arr.slice()
// console.log(arr4) //deep clone

//slice
// const arr1 = arr.slice()
// const arr2 = arr.slice(1, 4)
// const arr3 = arr.slice(2)
// const arr4 = arr.slice(-2)
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)
// console.log(arr4)


//Splice
// const spliceRes = arr.splice(1, 2, 'a', 'b', 'c')
// console.log(spliceRes, arr)

const res = [10, 20, 30].map(parseInt)
console.log(res)

//Disassemble
[10, 20, 30].map((num, index) => {
    return parseInt(num, index)
})

// fn.call(this, p1, p2, p3)
// fn.apply(this, arguments)

const p1 = document.getElementById('p1')
const body = document.body
bindEvent(p1, 'click', e => {
    e.stopPropagation() // Comment out this line to experience the event bubbling 注釋掉這一行，來體會事件冒泡
    alert('active')
})
bindEvent(body, 'click', e => {
    alert('cancel')
})