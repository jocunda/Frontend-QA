const p1 = new Promise((resolve, reject) => {
})
console.log('p1', p1)  //pending

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    })
})
console.log('p2', p2)  //pending firstly
setTimeout(() => console.log('p2-setTimeout', p2))//resolved

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject()
    })
})
console.log('p3', p3)
setTimeout(() => console.log('p2-setTimeout', p3))//rejected