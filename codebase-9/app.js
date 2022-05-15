const array1 = [
    [1,2,3,4,5],
    [1,2,3,4,5],
    ['1','2','3','4','5'],
]

const array2 = [
    [1,2,3,4,5],
    [1,2,3,7,6],
    [1,2,3,4,5],
]

for (let i = 0; i < array1.length; i++) {
    result = true
    for (let j = 0; j < array1[i].length; j++) {
        // check if element from array1 is same as array2
        // if not break loop and set result = false
        if (array1[i][j] !== array2[i][j]) { 
            result = false
            break
        }
    }
    console.log(result);
}