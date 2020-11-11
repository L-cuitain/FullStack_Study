<<<<<<< HEAD
//1. 打印1-100中前三个是17的整数倍的数。

var count = 0;

for(let i = 1 ; i <= 100 ; i++){
    if(i % 17 == 0){

        count++;
        console.log(i);
    }

    if(count == 3){
        break;
    }
=======
//1. 打印1-100中前三个是17的整数倍的数。

var count = 0;

for(let i = 1 ; i <= 100 ; i++){
    if(i % 17 == 0){

        count++;
        console.log(i);
    }

    if(count == 3){
        break;
    }
>>>>>>> fcfc4cf8d62a9925da61ad8ce4841b0825f17668
}