const p1 = Promise.resolve(100) //Resolved
//console.log('p1',p1)
p1.then(data => {
    console.log('data', data)
}).catch(err => {
    console.log('err', err)
})

const p2 = Promise.reject('err') //Rejected
//console.log('p2',p2)
p2.then(data => {
    console.log('data2', data)
}).catch(err => {
    console.log('err2', err)
})