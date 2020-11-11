<template>
    <div class="demo">
        <div @mousemove="changeColor" :style="{backgroundColor: `hsl(${x}, 80%, 50%)`}" class="movearea">
            <p>x : {{ x }}</p>
        </div>
    </div>
</template>

<script>
//通过插值来绑定样式
export default {
    name : "data_bind_transtion",
    data(){
        return{
            x : 0
        }
    },
    methods: {
        changeColor(e){
            this.x = e.clientX;
        }
    }
}
</script>

<style>
p{
    width: 100%;
    height: 500px;
}

.movearea {
  transition: 0.2s background-color ease;
}
</style>