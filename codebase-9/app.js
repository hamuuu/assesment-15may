const fs = require('fs')

let file = fs.readFileSync('./array.json')
let data = JSON.parse(file)
let array = data.array

result = mergeSort(array)

fs.writeFile('./result.json', JSON.stringify(result), (err) => {
    if (err) {
        console.log(err);
    }
});

function mergeSort(array) {
    const half = array.length / 2
    
    // Base case or terminating case
    if(array.length < 2){
        return array 
    }
    
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
}

function merge(left, right) {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    return [ ...arr, ...left, ...right ]
}