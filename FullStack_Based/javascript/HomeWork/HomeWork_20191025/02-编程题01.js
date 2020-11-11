//1、定义一个长度为5的数组，之后生成5个随机数存入数组，
//随机数范围为10到100（包含10和100），
//遍历数组，将数组中小于50的元素替换成0，之后打印修改后的数组


//定义一个长度为5的数组
var arr = new Array(5);

//循环5次  
for(var i = 1 ; i <= 5 ; i++){

    //生成随机数
    var rd = Math.floor(Math.random() * (100-10) + 10);
    //将随机数添加到数组中
    arr.push(rd);
}

//遍历数组元素
for(var i = 0 ; i < arr.length ; i++){
    //判断数组元素是否小于 50
    if(arr[i] < 50){
        arr[i] = 0;
    }
}

console.log(arr);





