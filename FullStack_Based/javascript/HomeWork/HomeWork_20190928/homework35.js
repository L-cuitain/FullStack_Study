//35.1-100之间所有数的总和 与 平均值

var sum = 0;
for (let index = 0; index < 100; index++) {

    sum += index;
}

console.log("总和为: "+sum);

var avg = sum/100;

console.log("平均值为: "+avg);