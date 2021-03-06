// async function async1() {
//     console.log("async1 start");
//     await aync2();
//     console.log("async1 end");
// }
// async function async2() {
//     console.log("async2");
// }
// console.log("script start");

// setTimeout(function () {
//     console.log("setTimeout");
// }, 0);

// async1();

// new Promise(function (resolve) {
//     console.log("promise1");
//     resolve();
// }).then(function () {
//     console.log("promise2");
// });
// console.log("script end");


// async function fn() {
//     return 100
// }
// (async function () {
//     const a = fn()      //promise
//     const b = await fn()    //100
//     console.log(a)
//     console.log(b)
// })()

(async function () {
    console.log('start')
    const a = await 100
    console.log('a', a)
    const b = await Promise.resolve(200)
    console.log('b', b)
    const c = await Promise.reject(300)
    console.log('c', c)
    console.log('end')
})()