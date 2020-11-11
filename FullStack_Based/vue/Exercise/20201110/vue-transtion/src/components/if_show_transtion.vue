<template>
    <div id="demo">
        <button class="">Toggle</button>

        <transition name="fade">
            <p v-if="show">hello</p>
        </transition>
    </div>
</template>

<script>
//过渡转换 六种类别
// v-enter-from : 输入的开始状态  在插入元素前添加  在插入元素后删除
// v-enter-active : 输入的活动状态  在整个进入阶段应用 在插入元素前添加  在动画结束后消失 
// v-enter-to:  输入的结束状态 
// v-leave-from:  输出后的开始状态  过渡结束时  删除
// v-l0eave-active: 输出后的活动状态  当过渡动画结束移出
// v-leave-to: 输出后的结束状态  触发离开过渡后添加一帧  在动画结束时 


export default {
    name : "if_show_transion",
    data(){
        return{
            show : true
        }
    }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>