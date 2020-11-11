// 3.求2000-3000年之间的所有的闰年以及个数

//定义变量 count  保存2000到3000之间闰年的个数
var count = 0;

//遍历2000到3000
for(let i = 2000 ; i <= 3000 ; i++){
    if(i % 400 == 0 || i % 4 == 0 && i % 100 != 0){
        console.log(i);
        count++;
    }
}

//打印count
console.log("闰年的个数为: "+count);
