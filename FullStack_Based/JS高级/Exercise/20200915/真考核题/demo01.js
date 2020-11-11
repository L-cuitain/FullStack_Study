let arr = [
    [11, 11, 22, 33, 44, 55],
    [22, 11, 22, 33, 44, 55, 88],
    [33, 11, 22, 33, 44],
    [44, 11, 22, 44, 55],
    [55, 55],
    ];

let num = getNum(arr);
let sum = getSum(arr);
let avg = getAvg(arr);

console.log(num);
console.log(sum);
console.log(avg);

function getNum(arr){
    let count = 0;

    for(let i = 0 ; i < arr.length ; i++){
        for(let j = 0 ; j < arr[i].length ; j++){
            if(arr[i][j] == 11){
                count++;
            }
        }
    }

    return count;
}    



function getSum(arr){
    let sum = 0;

    for(let i = 0 ; i < arr.length ; i++){
        for(let j = 0 ; j < arr[i].length ; j++){

            sum += arr[i][j];
        }
    }

    return sum;
}



function getAvg(arr){
    let avg = 0;
    let count = 0;

    for(let i = 0 ; i < arr.length ; i++){
        for(let j = 0 ; j < arr[i].length ; j++){

            avg += arr[i][j];
            count++;
        }
    }
    avg = avg/count;


    return avg;
}