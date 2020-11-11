//6.现在有2个数组，var arr1 = [1,7,9,11,8,15,10,19],var arr2 =[2,1,6,8,10]将2个数组合并为一个数组，并将数组去重，然后按照升序进行排列


//分析:
//调用concat()方法将两个数组合并
//调用splice()方法 并在for循环判断中去重
//运用冒泡排序对数组进行排列



//步骤:
//定义两个数组 arr1  arr2
var arr1 = [1,7,9,11,8,15,10,19];
var arr2 =[2,1,6,8,10];

//将两个数组合并为一个新数组
var arr3 = arr1.concat(arr2);


//对新数组 去重
for(var i = 0 ; i < arr3.length ; i++){
    for(var j = 0 ; j < i ; j++){

        if(arr3[i] == arr3[j]){
            arr3.splice(i,1);
        }
    }
}


//按照升序排列
for(var i = 0 ; i < arr3.length-1 ; i++){

    for(var j = 0 ; j < arr3.length-1-i ; j++){

        if(arr3[j] > arr3[j+1]){
            
            var temp = arr3[j];
            arr3[j] = arr3[j+1];
            arr3[j+1] = temp;
        }
    }
}

console.log(arr3);

