/** 
 * 
 * DeepClone */

const obj = {
    age: 20,
    name: 'xxx',
    addrress: {
        city: 'beijing'
    },
    arr: ['a', 'b', 'c']
}

const obj1 = deepClone(obj)
obj1.addrress.city = 'shanghai'
obj1.arr[0] = 'a1'
console.log(obj.addrress.city)
console.log(obj.arr[0])

/**
 * deepclone
 * @param {Object} obj that you copy
 */

function deepClone(obj = {}) {
    if (typeof obj !== 'object' || obj == null) {
        //object is null or not object,array, direct return
        return obj
    }
    //first return result
    let result
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }
    for (let key in obj) {
        //make sure key not original prop
        if (obj.hasOwnProperty(key)) {
            //recursive!!!
            result[key] = deepClone(obj[key])
        }
    }
    //return result
    return result
}
