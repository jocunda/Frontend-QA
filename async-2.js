// async function fn1() {
//     // return 100
//     return Promise.resolve(200)
// }

// const res1 = fn1()         //async function, return Promise object
// console.log('res1', res1) //Promise object
// res1.then(data => {
//     console.log('data', data)    //data 200
// })

// !(async function () {
//     const p1 = Promise.resolve(300)
//     const data = await p1       //await equal to then (Promise)
//     console.log('data', data)
// })()                    //data 300

// !(async function () {
//     const data1 = await 400       //await Promise.resolve(400)
//     console.log('data1', data1)
// })()                    //data1 400

// !(async function () {
//     const data2 = await fn1()       //await Promise.resolve(400)
//     console.log('data2', data2)
// })()                    //data2 200

// !(async function () {
//     const p4 = Promise.reject('err')    //rejected state
//     try {
//         const res = await p4
//         console.error(res)
//     } catch (ex) {
//         console.error(ex)       //try..catch equal to catch(promise)
//     }
// })()

!(async function () {
    const p4 = Promise.reject('err1')
    const res = await p4
    console.log('res', res)
})