//定义数组
var arr = [9,10,6,6,1,9,3,5,6,4]

//方法一: 定义set集合  将数组存放到set集合中
var set = new Set(arr);

console.log(set);


//方法二: 创建for循环嵌套  判断相同元素删除
for(let i = 0 ; i < arr.length ; i++){
    for(let j = 0 ; j < i ; j++){
        if(arr[i] == arr[j]){
            arr.splice(i,1);
        }
    }
}

console.log(arr);



