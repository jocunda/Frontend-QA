//Determine object or array
function isObject(obj) {
    return typeof obj === 'object' && obj !== null
}
//all equal
function isEqual(obj1, obj2) {
    if (!isObject(obj1) || !isObject(obj2)) {
        //value type(participate equal is not function)
        return obj1 === obj2
    }
    if (obj1 === obj2) {
        return true
    }
    //both is object or array, and not equal
    //1.first take obj1 and obj2 keys, compare value
    const obj1Keys = Object.keys(obj1) //keys will take index value
    const obj2Keys = Object.keys(obj2)
    if (obj1Keys.length !== obj2Keys.length) {
        return false
    }
    //2. obj1 as standard and obj2 a recursive comparation
    for (let key in obj1) {
        //Compare the value of the current key --recursive!
        const res = isEqual(obj1[key], obj2[key])
        if (!res) {
            return false
        }
    }
    //3. all is equal
    return true
}

const obj1 = {
    a: 100,
    b: {
        x: 100,
        y: 200,
    }
}
const obj2 = {
    a: 100,
    b: {
        x: 100,
        y: 200,
    }
}
console.log(obj1 === obj2) //false
console.log(isEqual(obj1, obj2))


// '1-2-3'.split('-') //[1,2,3]
// [1, 2, 3].join('-')  //'1-2-3'