<template>
    <div class="about">
    <h1>Ant-Design-Vue</h1>
    <h3>Button</h3>
    <a-button type="primary"> Primary </a-button>
    <a-button>Default</a-button>
    <a-button type="dashed"> ashed </a-button>
    <a-button type="danger"> Danger </a-button>
    <a-config-provider :auto-insert-space-in-button="false">
      <a-button type="primary"> 按钮 </a-button>
    </a-config-provider>
    <a-button type="primary"> 按钮 </a-button>
    <a-button type="link"> Link </a-button>
    <h3>栅栏</h3>
    <a-row>
      <a-col :span="12"> col-12 </a-col>
      <a-col :span="12"> col-12 </a-col>
    </a-row>
    <a-row>
      <a-col :span="8"> col-8 </a-col>
      <a-col :span="8"> col-8 </a-col>
      <a-col :span="8"> col-8 </a-col>
    </a-row>
    <a-row>
      <a-col :span="6"> col-6 </a-col>
      <a-col :span="6"> col-6 </a-col>
      <a-col :span="6"> col-6 </a-col>
      <a-col :span="6"> col-6 </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  setup: () => {

  }
})
</script>

<style scoped>

</style>
