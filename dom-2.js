const div1 = document.getElementById('div1')
const div2 = document.getElementById('div2')

//build new node
const newP = document.createElement('p')
newP.innerHTML = 'this is newP'

//insert node
div1.appendChild(newP)

//move node
const p1 = document.getElementById('p1')
div2.appendChild(p1)

//get parent node
console.log(p1.parentNode)

//get child list
const div1ChildNodes = div1.childNodes
console.log(div1ChildNodes)

// div1.childNodes[0].nodeName
// div1.childNodes[2].nodeName
// div1.childNodes[0].nodeType
// div1.childNodes[2].nodeType

const div1ChildNodesP = Array.prototype.slice.call(div1.childNodes).filter(child => {
    if (child.nodeType === 1) {
        return true
    }
    return false
})

console.log('div1ChildNodesP', div1ChildNodesP)

//remove node
div1.removeChild(div1ChildNodesP[0])