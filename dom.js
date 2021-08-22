// const div1 = document.getElementById('div1') //element
// console.log('div1', div1)

// const divList = document.getElementsByTagName('div')    //assembly
// console.log('divList.length', divList.length)
// console.log('divList[0]', divList[0])

// const containerList = document.getElementsByClassName('container')    //assembly
// console.log('containerList.length', containerList.length)
// console.log('containerList[0]', containerList[0])

// const pList = document.querySelectorAll('p')
// console.log('plist', pList)

const pList = document.querySelectorAll('p')
const p1 = pList[0]

// //property
// p1.style.width = '100px'
// console.log(p1.style)
// p1.className = 'red'
// console.log(p1.style.width)
// console.log(p1.className)
// console.log(p1.nodeName)
// console.log(p1.nodeType)

//attribute
p1.setAttribute('data-name', 'imooc')
console.log(p1.getAttribute('data-name'))
p1.setAttribute('style', 'font-size:50px')
console.log(p1.getAttribute('style'))