var nums = [5,10,15];

let newArr = getNewArr(nums);
console.log(newArr);

function getNewArr(arr){
    let newArr = [];

    for(let i = 0 ; i < arr.length ; i++){
        newArr.push(arr[i]*2);
    }

    return newArr;
}