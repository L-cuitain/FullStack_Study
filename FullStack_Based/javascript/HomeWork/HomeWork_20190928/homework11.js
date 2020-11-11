//11. 本金10000元存入银行，年利率是千分之三，每过1年，将本金和利息相加作为新的本金。计算5年后，获得的本金是多少？

//本金
var QiMoney = 10000;

//1年的本金
var OneYmoney = 10000+10000*0.0003;
console.log(OneYmoney);

//5年的本金
var FiveYmoney = 5*(10000+10000*0.0003)
console.log(FiveYmoney);