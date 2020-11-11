<template>
  <div @click="handleClick">{{ addOne }}</div>
</template>

<script>
import { computed , ref } from "vue";

export default {
    name : "Setup_computed",
    setup(){
        //定义ref简单类型变量
        let count = ref(1);

        //#region 创建computed 传入一个拥有get 和 set函数的对象
        const addOne = computed({
            get: () => {
                return count.value++;
            },
            set: val => {
                count.value = val+1;
                console.log(count.value);
            }
        });

        //创建方法
        function handleClick(){
            addOne.value = 5;
        }

        //#endregion

        return{
            addOne,
            handleClick
        }
    }
}
</script>

<style>

</style>