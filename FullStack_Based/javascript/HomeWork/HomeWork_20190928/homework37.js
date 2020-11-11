//37.要求：圆的面积小于50，请打印出所有符合面积要求的整数半径。

var r = 1;

while(true){

    if(3.14*r*r < 50){
        console.log(r);
        r++;
    }
}