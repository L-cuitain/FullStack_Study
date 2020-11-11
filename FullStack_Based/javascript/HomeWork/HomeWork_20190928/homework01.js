//1.利用JavaScript打印出所有的"水仙花数"，所谓"水仙花数"是指一个三位数，其各位 数字立方和等于该数本身。
for (var index = 100; index <= 999; index++) {
    
     var ge = index  % 10;
     var shi = index / 10 % 10;
     var bai = index / 100 % 10;

     if(index == (parseInt(ge)*parseInt(ge)*parseInt(ge)+parseInt(shi)*parseInt(shi)*parseInt(shi)+parseInt(bai)*parseInt(bai)*parseInt(bai))){
            console.log(index);
     }

}


