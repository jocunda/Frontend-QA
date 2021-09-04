function flat(arr) {
    //verify arr, is it have deep array [1,2[3,4]]
    const isDeep = arr.some(item => item instanceof Array)
    if (!isDeep) {
        return arr //already flatern [1,2,3,4]
    }
    const res = Array.prototype.concat.apply([], arr)
    return res //recursive
}
const res = flat([1, 2, [3, 4, [10, 20, [100, 200]]], 5])
console.log(res)

Array.prototype.concat.apply([], arr)
Array.prototype.concat.call([], 1, 2, [3, 4], 5)
[].concat(1, 2, [3, 4], 5)
[].concat(1, 2, [3, 4, [10, 20]], 5)