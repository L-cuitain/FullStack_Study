//26.利用JavaScript编写程序实现如下功能；普通顾客购物满 100 元打 9 折；会员购物打 8 折；会员购物满 200 打 7.5 折。

var customer = {
    name : "张三",
    money : 101,
    type : "会员顾客"
}

if(customer.type == "会员顾客"){

    if(customer.money >= 200){
        customer.money = customer.money*0.75;
    }else{
        customer.money = customer.money*0.8;
    }

}else{

    if(customer.money >= 100){
        customer.money = customer.money*0.9;
    } 
}

console.log(customer.name+" 是 "+customer.type+" 共消费: "+customer.money);