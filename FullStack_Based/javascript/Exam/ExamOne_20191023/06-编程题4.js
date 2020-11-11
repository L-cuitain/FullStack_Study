//4、封装一个函数，实现数组var arr = [23,45,78,98,13,89,5]，从大到小排序。


//步骤:
//定义 数组 arr
var arr = [23,45,78,98,13,89,5]

//冒泡排序
for(var i = 0 ; i < arr.length - 1 ; i++){
    for(var j = 0 ; j < arr.length - 1 - i ; j++){
        if(arr[j] < arr[j+1]){
            var tmp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = tmp;
        }
    }
}
//打印数组
console.log(arr);
