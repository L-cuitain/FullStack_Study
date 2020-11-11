//获取元素
let slider = document.querySelector('.slider');

let ul = document.querySelector('ul');
let ol = document.querySelector('ol');

let prev = document.querySelector('.prev');
let next = document.querySelector(".next");


//左右按钮显示与隐藏
slider.addEventListener('mouseenter',function(){
    prev.style.display = 'block';
    next.style.display = 'block';

    //清除定时器
    clearInterval(timer);
    
    //重置定时器
    timer = null;
});

slider.addEventListener('mouseleave',function(){
    prev.style.display = 'none';
    next.style.display = 'none';

    //开启定时器
    timer = setInterval(function(){
        next.click();
    },2000);
});


//在图片末尾添加第一张图片
//获取第一张图片
let firstLi = ul.children[0];
//克隆第一张图片
let cloneLi = firstLi.cloneNode(true);
//将克隆的第一张图片添加到ul末尾
ul.appendChild(cloneLi);
//修改ul的宽度
ul.style.width = slider.offsetWidth * ul.children.length + 'px';


//创建变量num 记录图片移动次数
let num = 0;

//创建变量cricle 记录小圆点移动次数
let cricle = 0;

//创建flag
let flag = true;


//添加小圆点
for(let i = 0 ; i < ul.children.length-1 ; i++){
    //创建标签li
    let li = document.createElement('li');

    //为li添加index属性
    li.dataset.index = i;

    //将标签li添加到ol中
    ol.appendChild(li);

    //第一个圆点改变样式
    ol.children[0].classList.add('active');

    //创建li的点击事件
    li.addEventListener('click',function(){
        //排他
        for(let i = 0 ; i < ol.children.length ; i++){
            ol.children[i].classList.remove('active');
        }

        this.classList.add('active');
    
        //获取index属性值
        let index = this.dataset.index;
        num = index;
        cricle = index;

        //调用动画函数
        animate(ul,{left: slider.offsetWidth * -index});
    });
}

//创建左右按钮点击事件
next.addEventListener('click',function(){

    if(flag == true){

    flag = false;

    //判断num是否到达图片末尾
    if(num == ul.children.length-1){
        num = 0;
        ul.style.left = 0;
    }

    //num自增
    num++;

    //调用animate动画
    animate(ul,{left: slider.offsetWidth * -num},function(){
        flag = true;
    });

    //小圆点跟随移动
    cricle++;

    //判断小圆点是否达到长度最大值
    if(cricle == ol.children.length){
        cricle = 0;
    }

    //调用函数
    cricleMove();
}
});

prev.addEventListener('click',function(){

    if(flag == true){

    flag = false;    

    //判断num是否到达图片开头
    if(num == 0){
        num = ul.children.length-1;
        ul.style.left = slider.offsetWidth * num;
    }

    //num自减
    num--;

    //调用动画animate
    animate(ul,{left: slider.offsetWidth * -num},function(){
        flag = true;
    });

    //判断小圆点是否到达长度最小值
    if(cricle == 0){
      cricle = ol.children.length;  
    }

    //小圆点自减
    cricle--;

    //调用函数
    cricleMove();
}
});


//创建定时器
let timer = setInterval(function(){
    next.click();
},2000);


//创建函数  改变小圆点样式
function cricleMove(){
    //排他
    for(let i = 0 ; i < ol.children.length ; i++){
        ol.children[i].classList.remove('active');
    }

    ol.children[cricle].classList.add('active');
}