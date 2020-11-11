//25.利用JavaScript编写程序：张三为他的手机设定了自动拨号
// 按 1：拨爸爸的号
// 按 2：拨妈妈的号
// 按 3：拨爷爷的号
// 按 4：拨奶奶的号

var num = 1;

switch(num){
    case 1 :
        console.log("拨爸爸的号");
        break;
    case 2 :
        console.log("拨妈妈的号");    
        break;
    case 3 :
        console.log("拨爷爷的号");    
        break;
    case 4 :
        console.log("拨奶奶的号");    
        break; 
    default:
        console.log("请输入范围内数字");
        break            
}
