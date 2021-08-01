
Array.prototype.myreduce = function (callback, initialValue) {
    let accumulator = initialValue
   this.forEach((currentValue) => {
        
    accumulator = callback(accumulator,currentValue)
    })

    return accumulator
    
}

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator * currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
 
console.log(array1.myreduce(reducer, 5));
// expected output: 15
