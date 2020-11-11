//14.请按如下要求编写程序,打印菜单:
// 当数字为1时输出菜单"新建";
// 当数字为2时输出菜单"打开文件";
// 当数字为3时输出菜单"保存";
// 当数字为4时输出菜单"刷新";
// 当数字为5时输出菜单"退出",

var num = 1;

switch(num){
    case 1 :
        console.log("新建");
        break;
    case 2 : 
        console.log("打开文件");    
        break;
    case 3 :
        console.log("保存");
        break;
    case 4 : 
        console.log("刷新");
        break;
    case 5 :
        console.log("退出");
        break;
    default :
        console.log("请输入范围内数值");
        break;            
}
