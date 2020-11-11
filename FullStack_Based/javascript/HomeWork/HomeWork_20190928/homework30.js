//30.输出2-200之间的所有素数（素数就是只能被1和其本身整除的数）

var j = 2;

for(var i = 2 ; i <= 200 ; i++){
    while(i % j != 0){
        j++;
    }
    if(i == j){
        console.log(i);
        j = 2;
    }

}