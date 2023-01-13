// Min to Front
// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

const minToFront = (arr) => {
    let min = arr[0];
    
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    let minIdx = arr.indexOf(min);

    for(let i = minIdx; i >= 0; i--){
        arr[i] = arr[i -1];
    }
    arr[0] = min

    return arr;
    
    
    
}
console.log(minToFront([10,20,30,45,2,60,70]));





// Concat
// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

const concat = (arr1, arr2) => {
    let newArr = [];
    for(let i = 0; i < arr1.length; i++){
        newArr.push(arr1[i])
    }
    for(let i = 0; i< arr2.length; i++){
        newArr.push(arr2[i])
    }
    return newArr;

}
console.log(concat(['a', 'b'], [1,2]));




// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. Given arr and values min and max, retain only the array values between min and max.


// Method 1
const filterRange = (arr, min, max) => {
    let filtAns = arr.filter(filt => filt < max && filt > min);
    return filtAns;
}
console.log(filterRange([1,2,3,4,5,6,7,8], 2, 7));



// OR

// Method 2
const filterRange = (arr, min, max) => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > min && arr[i] < max){
            newArr.push(arr[i])
        }
    }
    return newArr;

}

console.log(filterRange([1,2,3,4,5,6,7,8], 2, 7))