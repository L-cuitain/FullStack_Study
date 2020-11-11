//10.. 字符串查找,不使用indexOf,正则，substr,substring,contain,slice等现成的方法,实现如下效果：
    //  a ="34",b="1234567"，返回2
    //  a = '35', b= "1234567" 返回-1
    //  a = "355", b = "12354355"  返回5

    //定义两个字符串
    var a1 ="34", b1 ="1234567";

    var a2 = '35', b2 = "1234567"

    var a3 = "355", b3 = "12354355"

    //调用函数  获取个数
    var count = getCount(a1,b1);

    console.log(count);
    

    
    //创建函数 统计两个字符串相同的值的个数
    function getCount(a,b){


    //定义计数器count
    var count = 0;


    //遍历两个字符串  
    for(var i = 0 ; i < a.length ; i++){
        for(var j = 0 ; j < b.length ; j++){

            //判断字符串 b 中是否有  a 这个字符串
            if(b.indexOf(a) != -1){
          
            

            //如果有 则 判断字符是否相等
            if(a[i] == b[j]){

                //如果有相同字符
                if(a[i] == a[i+1]){
                    //终止循环
                    break;
                }

                //相等计数器自增
                count++;
            }
        }else{
            //不相等为 -1
            count = -1;
        }
    }
}
    
    if(count > 0){
        return count;
    }else{
        return -1;
    }
}

    
    