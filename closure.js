function create() {
    let a = 100
    return function () {
        console.log(a)
    }
}

const fn = create()
const a = 200
fn()


// function print(fn) {
//     const a = 200
//     fn()
// }

// const a = 100
// function fn() {
//     console.log(a)
// }
// print(fn)