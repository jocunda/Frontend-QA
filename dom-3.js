const list = document.getElementById('list')

//build document part, have not insert to DOM structure
const frag = document.createDocumentFragment()

for (let i = 0; i < 20; i++) {
    const li = document.createElement('li')
    li.innerHTML = `List item ${i}`

    //insert document part
    frag.appendChild(li)
}

//finished than unify insert to DOM structure
list.appendChild(frag)