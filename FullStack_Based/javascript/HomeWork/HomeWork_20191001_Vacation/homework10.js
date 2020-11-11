//10、超市购物小票V2  

console.log("            欢迎光临        ");
console.log("品名      售价     数量      金额");
console.log("----------------------------------");

var f1 = {
    id : 090115,
    name : "少林寺酥饼核桃",
    count : 22,
    price : 15.50
}
var f2 = {
    id : 090028,
    name : "然光a移",
    count : 55,
    price : 16.00,
}
var f3 = {
    id : 090027,
    name : "尚康杂粮牡丹饼",
    count : 24,
    price : 14.50,
}

//定义变量  存入单项商品总价
var total1 = f1.price*f1.count;
var total2 = f2.price*f2.count;
var total3 = f3.price*f3.count;


console.log(f1.name+"    "+f1.price+" * "+f1.count);
console.log("("+f1.id+")=   "+total1);

console.log(f2.name+"    "+f2.price+" * "+f2.count);
console.log("("+f2.id+")=   "+total2);

console.log(f3.name+"    "+f3.price+" * "+f3.count);
console.log("("+f3.id+")=   "+total3);

console.log("-------------------------------------");
//定义变量num  统计几项商品
var num = 0;
//将商品 存入数组中
var arr = [f1,f2,f3];

for(var i = 0 ; i < arr.length ; i++){
    num++;
}

var totalCount = f1.count+f2.count+f3.count;
var totalPrice = total1+total2+total3;

console.log(num + "项商品   共计: "+totalCount+" 件");
console.log("总计:  "+totalPrice);

console.log("凭此小票换取发票");