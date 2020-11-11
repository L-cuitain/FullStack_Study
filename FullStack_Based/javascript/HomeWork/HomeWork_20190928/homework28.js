//28.鸡兔同笼：鸡和兔子一共35只，笼子里一共有94只脚，用程序计算出鸡和兔子分别多少只

var tu;

for (let ji = 1; ji <= 35; ji++) {
    
    tu = 35-ji;

    if(2*ji+4*tu == 94){
        console.log("鸡有: "+ji+"只 , 兔有: "+tu+"只");
        break;
    }
}

