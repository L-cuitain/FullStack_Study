function My(name,age,sex,hobbies){
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.hobbies = hobbies;
    this.say = function(){
        return '食堂NMSL';
    }
}

let my = new My('张三',12,'男',['吃饭','睡觉','打']);

console.log(my.say());
