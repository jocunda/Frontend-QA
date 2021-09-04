//variable hoisting

// console.log(a)
// var a = 200

// let b = 10
// console.log(b)
// console.log(a)
// var a = 200

// var a
// console.log(a)
// a = 800

for (let i = 0; i < 10; i++) {
    let j = i + 1
}
console.log(i, j)