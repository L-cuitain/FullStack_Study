<template>
  <div>
    <div class="item" v-for="(item) in list" :key="item.id">
      <img :src="item.img" />
      <div class="name">{{ item.name }}</div>
      <div class="change">
        <a href="" @click.prevent="sub(item.id)">－</a>
        <input
          type="text"
          class="num"
          :value="item.num"
          @blur="change(item.id, $event)"
        />
        <a href="" @click.prevent="add(item.id)">＋</a>
      </div>
      <div class="del" @click="del(item.id)">×</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartList",
  props: ["list"],
  // watch: {
  //   list() {
  //     console.log("数据发生变化")
  //   }
  // },
  methods: {
    change(id, event) {
      this.$emit("change", {
        type: "change",
        num: event.target.value,
        id
      });
    },
    sub(id) {
      this.$emit("change", {
        type: "sub",
        id
      });
    },
    add(id) {
      this.$emit("change", {
        type: "add",
        id
      });
    },
    del(id) {
      this.$emit("change", {
        type: "del",
        id
      });
    }
  }
};
</script>

<style></style>
