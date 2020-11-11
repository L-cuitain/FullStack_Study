<template>
    <div class="container">
        <div class="box">
            <h2>声明响应式复杂变量:</h2>
            <p @click="changeState">{{ state }}</p>
        </div>
    </div>
</template>

<script>
//导入 vue 
import { reactive } from "vue";

export default {
    //引入声明响应式复杂对象的方法  reactive

    name : "Setup_reactive",
    setup(){
        //声明复杂数据
        let state = reactive(123);

        //点击元素 改变state的值
        function changeState(){
            state = 666;
            console.log(state);
        }

        //返回数据
        return{
            state,
            changeState
        }
    }
}
</script>

<style>

</style>