//  字符串查找,不使用indexOf,正则，substr,substring,contain,slice等现成的方法,实现如下效果：
//  a ="34",b="1234567"，返回2
//  a = '35', b= "1234567" 返回-1
//  a = "355", b = "12354355"  返回5
function getIndex(a, b) {
    //循环遍历字符串
    for(var i = 0 ; i < b.length ; i++){
        //判断第一个字符是否相同
        if(a[0] == b[i]){
            
            //获取索引
            let index = i;

            let result = '';

            //获取字符串之后的内容
            for(let j = index ; j < index+a.length ; j++){
                result += b[j];

                if(result === a){
                    return i;
                }
            }
        }
    }

    return -1;
}

// getIndex("356", "12354356");
console.log(getIndex("36312", "1235436"));
