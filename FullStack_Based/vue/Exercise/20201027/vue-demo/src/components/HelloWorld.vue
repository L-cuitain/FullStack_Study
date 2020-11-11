<template>
  <div>
    <h3>我叫{{ name }} , 我今年{{ age }}岁了</h3>
    <div @click="changeName(this.cname)">{{ name }}</div>
    <button @click="changeAge">点我</button>
    <button @click="asyncAdd(2)">{{count}}</button>
  </div>
</template>

<script>
import { mapState, mapMutations , mapActions } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      cname: "火车王",
      score : 2
    };
  },
  methods: {
    // handleClick() {
    //   this.$store.commit("changeAge");
    // },
    // handleChangeName() {
    //   let name = this.cname;
    //   this.$store.commit("changeName", name);
    // }
    ...mapMutations(["changeAge", "changeName"]),
    // handleTime() {
      // this.$store.dispatch("asyncAdd", this.score);  
    // }
    ...mapActions(["asyncAdd"])
  },
  computed: {
    // name(){
    //   return this.$store.state.name;
    // },
    // age(){
    //   return this.$store.state.age;
    // }
    ...mapState(["name", "age" , "count"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
