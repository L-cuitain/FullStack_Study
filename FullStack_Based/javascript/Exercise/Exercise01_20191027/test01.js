//判断是否为素数

// function getSu(num){

//     for(var i = 2 ; i < num ; i++){
//         if(num % i === 0){
//             return false;
//         }
//     }

//     return true;
// }



//获取100到200以内的素数
// function getManySu(){

//     var num = 2;
//     for(var i = 100 ; i <= 200 ; i++){

//         while(i % num != 0){

//             num++;
//         }

//         if(i == num){
//             console.log(i);

//             num = 2;
//         }
//     }
// }

// console.log(getManySu());



// 5.写一个函数,输入某年某月某日，判断这一天是一年中的第几天
function getDay(year,month,day){
    
    //判断月份是否小于2月
    if(month < 2){
        return day;
    }


    //创建数组 获取所有月份的天数
    let getMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

    //定义 变量 sum  获取所有的天数
    let sum = 0;

    //遍历数组  获取 总计的天数
    for(let i = 0 ; i < month - 1; i++){
        sum += getMonth[i];
    }

    //判断是否为闰年
    if(year % 4 == 0 && year % 100 == 0 || year % 400 == 0){
        sum++;
    }

    return sum;
}



// function getStr(str) {
//       var str = str.toLowerCase().split("");
//       for (var i = 0; i < str.length; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].substring(1, str[i].length);
//         var string = str.join("");
//         return string;
//       }
//     }

//     var str = "helloWORLD";
//     console.log(getStr(str));


// var str = "yuan yuan yuan jiang jiang yong aaaaaaaaaaaaa aaaaaaaaaaaaa odpsospoaioaoaoaoaoao";

// var arr = str.split(" ");

// var max = arr[0].length;

// for(var i = 0 ; i < arr.length ; i++){

//     max = max > arr[i].length ? max : arr[i].length;
// }


// for(var i = 0 ; i < arr.length ; i++){

//     if(max == arr[i].length){
//         console.log("最长的单词: "+arr[i]+" 单词的长度: "+max);
//     }
// }


// var str = "abCDefG";

// var countS = 0;
// var countB = 0;

// var str_new = "";

// for(let i = 0 ; i < str.length ; i++){

//     if(str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122 ){
//         str_new += str[i].toUpperCase();

//         countS++;
//     }else{
//         str_new += str[i].toLowerCase();

//         countB++;
//     }
// }

// console.log(str_new+"  小写字母: "+countS+"  大写字母: "+countB);


// var staffinfo = [
//     { name: "刘备", post: "经理", district: "华北区" },
//     { name: "诸葛", post: "职员", district: "华北区" },
//     { name: "马谡", post: "职员", district: "华北区" },
//     { name: "袁绍", post: "经理", district: "西南区" },
//     { name: "曹操", post: "经理", district: "华中区" },
//     { name: "许褚", post: "职员", district: "华中区" },
//     { name: "张辽", post: "职员", district: "华中区" },
//     { name: "徐晃", post: "职员", district: "华中区" },
//   ]

// console.log("员工信息中 经理 的总人数: "+getManager(staffinfo));
// getAreaSum(staffinfo)


  
// function getManager(staffinfo){
    
//     var count = 0;

//     for(var index in staffinfo){

//         if(staffinfo[index].post == "经理"){
//             count++;
//         }
//     }

//     return count;
// }  


function getAreaSum(staffinfo){

    var countB = 0;
    var countX = 0;
    var countZ = 0; 

    for(var index in staffinfo){

        if(staffinfo[index].district == "华北区"){
            countB++;
        }else if(staffinfo[index].district == "西南区"){
            countX++;
        }else if(staffinfo[index].district == "华中区"){
            countZ++;
        }

    }

    console.log("华北区总人数："+countB+"人");
    console.log("西南区总人数："+countX+"人");
    console.log("华中区总人数："+countZ+"人");

    return "";
    
}

var str = "a#ab#c#D#a"
        var ans = "A#AC#C#BD#B"
        var score = 0

        function panFen(str) {
            arr1 = str.toUpperCase().split('#')
            arr2 = ans.toUpperCase().split('#')
            // console.log(arr1)
            // console.log(arr2)
            for (var i = 0; i < arr1.length; i++) {
                for (var j = 0; j < arr2.length; j++) {

                    console.log(arr1[i][i]);

                    if (arr1[i] === arr2[j] && arr1[i][i] === arr2[j][j] && i === j) {

                        score++
                    }
                }
            }
            return score * 3;
        }
        console.log(panFen(str))

















  




 











