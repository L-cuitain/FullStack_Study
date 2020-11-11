<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <div class="container">
    <div class="cart">
      <CartTitle :msg="this.msg"></CartTitle>
      <CartList :list="this.list" @change="change"></CartList>
      <CartPay :list="this.list"></CartPay>
    </div>
  </div>
</template>

<script>
import img1 from "@/assets/a.jpg";
import img2 from "@/assets/b.jpg";
import img3 from "@/assets/c.jpg";
import img4 from "@/assets/d.jpg";
import img5 from "@/assets/e.jpg";

import CartTitle from "./components/CartTitle";
import CartList from "./components/CartList";
import CartPay from "./components/CartPay";

export default {
  name: "Cart",
  data() {
    return {
      msg: "张三",
      list: [
        {
          id: 1,
          name: "TCL彩电",
          price: 1000,
          num: 1,
          img: img1
        },
        {
          id: 2,
          name: "机顶盒",
          price: 1000,
          num: 1,
          img: img2
        },
        {
          id: 3,
          name: "海尔冰箱",
          price: 1000,
          num: 1,
          img: img3
        },
        {
          id: 4,
          name: "小米手机",
          price: 1000,
          num: 1,
          img: img4
        },
        {
          id: 5,
          name: "PPTV电视",
          price: 1000,
          num: 2,
          img: img5
        }
      ]
    };
  },
  methods: {
    change(val) {
      if (val.type == "change") {
        //获取num
        this.list.some(item => {
          if (item.id == val.id) {
            item.num = val.num;
            item.num = item.num <= 0 ? 0 : item.num;
            return true;
          }
        });
      } else if (val.type == "sub") {
        this.list.some(item => {
          if (item.id == val.id) {
            item.num--;
            item.num = item.num <= 0 ? 0 : item.num;
            return true;
          }
        });
      } else if (val.type == "add") {
        this.list.some(item => {
          if (item.id == val.id) {
            item.num++;
            return true;
          }
        });
      } else if (val.type == "del") {
        let index = this.list.findIndex(item => {
          return item.id == val.id;
        });
        this.list.splice(index, 1);
      }
    }
  },
  components: {
    CartTitle,
    CartList,
    CartPay
  }
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

.container .cart {
  width: 300px;
  /*background-color: lightgreen;*/
  margin: auto;
}

.container .title {
  background-color: lightblue;
  height: 40px;
  line-height: 40px;
  text-align: center;
  /*color: #fff;*/
}

.container .total {
  background-color: #ffce46;
  height: 50px;
  line-height: 50px;
  text-align: right;
}

.container .total button {
  margin: 0 10px;
  background-color: #dc4c40;
  height: 35px;
  width: 80px;
  border: 0;
}

.container .total span {
  color: red;
  font-weight: bold;
}

.container .item {
  height: 55px;
  line-height: 55px;
  position: relative;
  border-top: 1px solid #add8e6;
}

.container .item img {
  width: 45px;
  height: 45px;
  margin: 5px;
}

.container .item .name {
  position: absolute;
  width: 90px;
  top: 0;
  left: 55px;
  font-size: 16px;
}

.container .item .change {
  width: 100px;
  position: absolute;
  top: 0;
  right: 50px;
}

.container .item .change a {
  font-size: 20px;
  width: 30px;
  text-decoration: none;
  background-color: lightgray;
  vertical-align: middle;
}

.container .item .change .num {
  width: 40px;
  height: 25px;
}

.container .item .del {
  position: absolute;
  top: 0;
  right: 0px;
  width: 40px;
  text-align: center;
  font-size: 40px;
  cursor: pointer;
  color: red;
}

.container .item .del:hover {
  background-color: orange;
}
</style>
