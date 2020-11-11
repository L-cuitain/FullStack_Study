//9. 分数转换,给一个分数，判定等级。大于等于90  A，大于等于80小于90  B，大于等于70小于80  C ，大于等于60小于70 D，小于60 E

var count = 60;

if(count > 90){
    console.log("A");
}else if(count >= 80 && count <= 90){
    console.log("B");
}else if(count >= 70 && count <= 80){
    console.log("C");
}else if(count >= 60 && count <= 70){
    console.log("D");
}