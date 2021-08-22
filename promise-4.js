// const p1 = Promise.resolve().then(() => {
//     return 100
// })
// console.log('p1', p1)//resolved will trigger then callback
// p1.then(() => {
//     console.log('123')
// })

// const p2 = Promise.resolve().then(() => {
//     throw new Error('then error')
// })
// console.log('p2', p2)//rejected will trigger catch callback
// p2.then(() => {
//     console.log('456')
// }).catch(err => {
//     console.error('err100', err)
// }).then(() => {
//     console.log('mimo')
// })

// const p3 = Promise.reject('my error').catch(err => {
//     console.log(err)
// })
// console.log("p3", p3) //notice resolved trigger then callback
// p3.then(() => {
//     console.log(100)
// })

// const p4 = Promise.reject('my error').catch(err => {
//     throw new Error('catch err')
// })
// console.log("p4", p4) //rejected promise trigger catch callback
// p4.then(() => {
//     console.log(200)
// }).catch(() => {
//     console.log('some err')
// })  //resolved


function loadImg(src) {
    const p = new Promise((resolve, reject) => {
        const img = document.createElement("img");
        img.onload = () => {
            resolve(img);
        };
        img.onerror = () => {
            const err = new Error(`image load failed ${src}`);
            reject(err);
        };
        img.src = src;
    });
    return p;
}

const src1 = "https://picsum.photos/id/237/200/300";
const src2 = "https://picsum.photos/id/238/200/300";

async function loadImg1() {
    const img1 = await loadImg(src1)
    return img1
}

async function loadImg2() {
    const img2 = await loadImg(src2)
    return img2
}

(async function () {
    //sync style
    //img1
    const img1 = await loadImg1()
    console.log(img1.height, img1.width)
    //img2
    const img2 = await loadImg2()
    console.log(img2.height, img2.width)
})()