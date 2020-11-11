//要求 1）商品编号 商品名称  单价 和品质 都定义成变量
// 2）在控制台出各种水果的信息，如图二所示

console.log("水果编号    水果名称   水果单价  计价单位   品质");

var f1 = {
    id : 1,
    name : "榴莲",
    price : 32.0,
    count : "公斤",
    p : "A"
}

var f2 = {
    id : 2,
    name : "苹果",
    price : 6.5,
    count : "公斤",
    p : "B"
}

var f3 = {
    id : 3,
    name : "猕猴桃",
    price : 6.0,
    count : "公斤",
    p : "A"
}

console.log(f1.id+"     "+f1.name+"        "+f1.price+"           "+f1.count+"          "+f1.p);
console.log(f2.id+"     "+f2.name+"        "+f2.price+"           "+f2.count+"          "+f2.p);
console.log(f3.id+"     "+f3.name+"        "+f3.price+"           "+f3.count+"          "+f3.p);


