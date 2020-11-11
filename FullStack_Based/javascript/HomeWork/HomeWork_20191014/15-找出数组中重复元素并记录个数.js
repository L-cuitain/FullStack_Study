//15.找出一个数组中有哪些重复元素，并且这些元素各重复了几次,var arr = [0,1,3,1,1,5,5,8,8,8,0,9,5]


//分析:
//用map集合  获取每个元素 作为key  再创建计数器作为 value值
//创建嵌套for循环  找出重复的元素
//判断这个元素是否存在于map集合中
//如果存在 将这个元素的计数器自增
//如果不存在  将这个元素存入map集合  并存入值为  1  的计数器
//循环后  打印map  





//步骤:
//创建map集合
var map = new Map(); 
//创建计数器
var count = 1;

//定义数组
var arr = [0,1,3,1,1,5,5,8,8,8,0,9,5];

//外循环遍历数组元素
for(var i = 0 ; i < arr.length ; i++){
    //内循环遍历一次
    for(var j = 0 ; j < i ; j++){

        //判断 数组元素是否有相同的值
        if(arr[i] == arr[j]){

            //如果有  再次判断是否存在map集合中
            if(map.has(arr[j])){
                //如果存在 将 这个元素作为 key  value值为 计数器  计数器自增
                map.set(arr[j],count++);
            }else{
                //如果不存在map集合中
                //将计数器重新设置为 1
                count = 1;
                //将 这个元素 作为key  并将值为 1 的计数器作为value值
                map.set(arr[j],count);
            }
        }
    }
}

//打印
console.log(map);






