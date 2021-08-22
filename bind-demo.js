function fn1(a, b, c) {
    console.log('this', this)
    console.log(a, b, c)
    return 'this is fn1'
}
fn1.bind({ a: "hello" })()
// const fn2 = fn1.bind({ x: 100 }, 10, 20, 30)
// const res = fn2()
// console.log(res)

//simulate bind
Function.prototype.bind1 = function () {
    // parameter as array
    const args = Array.prototype.slice.call(arguments)
    //this(array first item)
    const t = args.shift()
    //fn1.bind(...)
    const self = this
    return function () {
        return self.apply(t, args)
    }
}

const fn2 = fn1.bind1({ x: 100 }, 10, 20, 30)
const res = fn2()
console.log(res)