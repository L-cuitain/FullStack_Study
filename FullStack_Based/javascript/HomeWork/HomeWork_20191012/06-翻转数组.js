//1.将数组 ['top', 'right', 'bottom', 'left', 'center'] 的内容反过来存放


//分析
//倒序遍历原数组  将值重新赋值给新数组


//步骤:

//创建原数组
var arr = ['top', 'right', 'bottom', 'left', 'center'];

//创建新数组
var newArr = [];

//倒序遍历原数组
for(var i = arr.length-1 ; i >= 0 ; i--){

    //将原数组元素赋值给新数组
    newArr[newArr.length] = arr[i];
}

//打印新数组
console.log(newArr);
