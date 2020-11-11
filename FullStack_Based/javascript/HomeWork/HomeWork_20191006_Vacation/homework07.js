//57.根据条件确定公司是否已经为司机投保
//  如果司机满足下列条件之一，公司则为他们投保；
//  1)	司机已婚。
//  2)	司机为30岁以上的未婚男性
//  3)	司机为25岁以上的未婚女性。
//   如果以上条件一个也不满足，则公司不为司机投保。
//  请编写一个程序，根据用户输入司机的婚姻状况、性别和年龄，判定该司机是否已经投保。

 var busDirver = {
     name : "张三",
     age : 12,
     gender : "男",
     type : "未婚"
 }

 if(busDirver.type == "已婚"){
    console.log("已经投保");
 }else if(busDirver.age > 30 && busDirver.type == "未婚" && busDirver.gender == "男"){
    console.log("已经投保");
 }else if(busDirver.age > 25 && busDirver.type == "未婚" && busDirver.gender == "女"){
    console.log("已经投保");
 }else{
    console.log("没有投保");
 }