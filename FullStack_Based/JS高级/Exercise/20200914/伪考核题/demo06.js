console.log(getMaxBySort(1,2));

//方式一:
function getMax(a,b){
    let max = Math.max(a,b);
    return max;
}



//方式二:
function getMaxBySort(){
    // console.log(arguments);
    //创建数组
    let arr = [];
    //遍历arguments对象  将值添加到数组中
    for(let i in arguments){
        arr.push(arguments[i]);
    }
    //数组排序
    arr = arr.sort();
    //找出最大值
    let max = arr[arr.length-1];
    //返回最大值
    return max;
}