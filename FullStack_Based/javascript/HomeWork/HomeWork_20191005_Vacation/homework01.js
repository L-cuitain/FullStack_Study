//41.入职薪水10K，每年涨幅5%，输出50年后工资多少

var money = 10000;

for(var i = 1 ; i <= 50 ; i++){
    money = money+money*0.05; 
}

console.log(money);