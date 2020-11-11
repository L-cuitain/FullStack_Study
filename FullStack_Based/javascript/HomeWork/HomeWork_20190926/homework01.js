// 1.在控制台打印输出目前所学的所有数据类型的类型

console.log(typeof 123);
console.log(typeof "123");
console.log(typeof true);
console.log(typeof []);
console.log(typeof function(){});
var num;
console.log(typeof num);


// 2.数据类型的相互转换
//     强制转成数字
console.log(Number(true))      //1
console.log(Number(false));    //0
console.log(Number(''))        //0
console.log(Number([]));       //0
console.log(Number(['1','2']));  //NaN
console.log(Number([1]))        //1
console.log(Number({}));        //NaN
console.log(Number({a:1}));     //NaN
console.log(Number('3.14'));    //3.14
console.log(Number(null));      //0
console.log(Number(undefined)); //NaN
console.log(Number('12456aaa')) //NaN

//     强制转成字符串
console.log(String({}));       //object
console.log(String([]));       //""
console.log(String(123));      //"123"
console.log(String(false));    //"false"
console.log(String(null));     //"null"
console.log(String(undefined));//"undefined"

//      强制转成布尔值
console.log(Boolean(0));       //false      
console.log(Boolean(''));      //false
console.log(Boolean(undefined));//false
console.log(Boolean(null));    //false
console.log(Boolean(NaN));     //false
console.log(Boolean({}));      //true
console.log(Boolean([]));      //true 




// 3. 将下列结果打印出来下面的题的结果

var num1 = 123;
var num2 = '123'
console.log(num1+num2);         //"123123"  +号充当连接符
console.log(num1+ +num2);           //123+123  --> 246   +num2将num2转换为number类型进行相加
console.log(num1+ !!num2);              //123+1   -->    !!num2 转换为boolean值   boolean值为true   再隐式转换为1  进行相加
console.log(num1+ Number(num2));        //123+123 --> 246  Number()转换为number类型进行相加



// 4. 求值

var a = 1; var b = ++a + ++a;       //var b = ++a + ++a  -->   b = 2 + 2  -->  b = 4
console.log(b);  

var a1 = 1; var b1 = a1++ + ++a1;   //var b1 = a1++ + ++a1  --> b1 = 1 + 2  --> b1 = 3
console.log(b1);   

var a2 = 1; var b2 = a2++ + a2++;       //var b2 = a2++ + a2++  -->  b2 = 1 + 1 --> b2 = 2
console.log(b2); 

var a3 = 1; var b3 = ++a3 + a3++;       //var b3 = ++a3 + a3++  -->  b3 = 2 + 1  --> b3 = 3 
console.log(b3);   


// 5. 输出下面的结果
console.log(NaN == NaN); //false    两个都不是数字，所以无法定义是否相等,NaN与任何值都不相等
console.log(NaN === NaN);//false    两个都不是数字，所以无法定义是否相等
console.log(undefined == null);  //true  规范中提到， 要比较相等性之前，不能将 null 和 undefined 转换成其他任
//                                     何值，并且规定null 和 undefined 是相等的。
console.log (undefined === null); //false  全等要求数据类型相同，所以因为类型不同 输出false

//当字符串和数字相加时，默认数字转为字符串
console.log(1+'true');  //1true   1会被转换成字符串，+号起连接作用，所以结果为1true

//当数字和布尔值相加时，默认布尔值转换为数字
console.log(1 + true);  //2    true会被转换成数字1，所以1+1=2

console.log('abc'>'b'); //false       a当作数字97，b当作数字98先比较'a' 和 'b'， 'a' 与 'b'不等，则直接得出结果
console.log("abc" > "aad" );//true  a当作数字97，b当作数字98先比较'a'和'a'，两者相等，继续比较第二个字符 'b' 与 'a' ,得出结果

//记住一句话，复杂数据类型在 == 的时候是false
//复杂数据类型在转布尔值的时候是 true
//当我们进行等号比较时，如果有一方是布尔值，我们要把布尔值转换为数字
//当我们进行等号比较时，如果有一方是数字，我们要把另一方也转换为数字
console.log([]==[]);       //false   因为存储在同一内存，所以内存地址一定不一样，所以不相等
console.log ( [] === [] ); //false    虽然类型相同，但是因为存储在同一内存，所以内存地址一定不一样，所以不相等
console.log ( [] == ! [] ); // true   []的布尔值是true，所以！[]的布尔值是false,false与[]相比，需要都转为数字类型，false=0,[]=0，所以结果为true
console.log ( [] == 0 );    // true  []可以被转化为数字值0，所以结果为false
console.log ( ! [] == 0 );  // true   []被转化为true, 所以![]就是false,0的布尔值也是false,所以结果为true


//   6.输出下面的结果:
var a = (10 * 3 - 4 / 2 + 1) % 2, //a=1
　  b = 3;                      
b %= a + 3;    // b = b% (a+3)= 3%4  so,b=3
console.log(a++); // 1
console.log(--b); // 2


//  7.输出下面的结果:
console.log(undefined&&5) // undefined   Undefined为false,所以直接输出undefined
console.log(1&&2&&3) //3       1为true, 2也为true,3也为true,所以
console.log(1&&0&&3) //0       1为true, 0为false, 所以输出false

//  8. 输出下面的结果:
var num1 = 20;
var num2 = 30
console.log(num1%num2);  // num1%num2 ,20/30的余数 = 20
num1+= num2         // num1 = num1 + num2
console.log(num1);  // 50      20  + 30
num1 = num1- num2;  // 将这段代码改写: num1 -= num2
console.log(num1);  //20    50-30=20

// 9. 世界上表示气温有两种方法：摄氏度和华氏度。两者的关系是：华氏度=(9/5)*摄氏度+32
//  利用JavaScript编写程序，要求：当输入不同摄氏度，提示出对应的华氏温度
var tem = 32
var htem = (9/5)*tem + 32
console.log(htem);



//  10. 在定义变量名字, 年龄,地址，打印出:我是XXX,今年XX岁了，我来自XXX。
var name = "张三";
var age = 12;
var address = "滑稽";

console.log(`我是${name},今年${age}岁了,我来自${address}`);