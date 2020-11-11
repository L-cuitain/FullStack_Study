<template>
  <div class="home_container">
    <section>
      <header class="top_tips">
        <span class="num_tip">题目 {{ pageNum }}</span>
      </header>
      <!-- 当fatherComponent为item的时候 -->
      <div>
        <div class="item_back item_container_style">
          <div class="item_list_container" v-if="questions.length > 0">
            <!-- 题干 -->
            <header class="item_title">{{ queTitle }}</header>
            <!-- 选项 -->
            <ul>
              <li
                class="item_list"
                v-for="(item, index) in questions[this.pageNum - 1]
                  .topic_answer"
                :key="item.topic_answer_id"
                @click="handleClick(index, item.topic_answer_id)"
              >
                <!-- <span :class="chooseNum == index ? 'has_choosed option_style' : 'option_style'">{{item.topic_answer_id}}</span> -->
                <span
                  class="option_style"
                  :class="{ has_choosed: chooseNum == index }"
                  >{{ String.fromCharCode(65 + index) }}</span
                >
                <span class="option_detail">{{ item.answer_name }}</span>
              </li>
            </ul>
          </div>
        </div>
        <span
          class="next_item button_style"
          v-if="pageNum < questions.length"
          @click="nextQuest"
        ></span>
        <span class="submit_item button_style" v-else @click="getScore"></span>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "item",
  data() {
    return {
      //答案索引
      chooseNum: null,
      //答案id
      chooseId: null
    };
  },
  //创建created生命周期  初始化渲染列表
  created() {
    this.$store.dispatch("getQuestion");
  },
  methods: {
    handleClick(index, id) {
      //将选项中的值传递给data数据
      this.chooseNum = index;
      this.chooseId = id;
    },

    //判断下一题
    nextQuest() {
      console.log(this.chooseId);
      //判断如果 id 不为空 证明用户已经点击选项 则跳转到下一题 并将之前的样式清空
      if (this.chooseId != null) {
        this.$store.dispatch(
          "addNum",
          String.fromCharCode(65 + this.chooseNum)
        );
        this.chooseId = null;
        this.chooseNum = null;
      } else {
        alert("您还没有选择");
      }
    },
    //获取分数 跳转路由
    getScore() {
      if (this.chooseId != null) {
        this.$store.dispatch(
          "addNum",
          String.fromCharCode(65 + this.chooseNum)
        );
        this.chooseId = null;
        this.chooseNum = null;
        this.$store.commit("checkScore");
        this.$router.push("/score");
      } else {
        alert("您还没有选择");
      }
    }
  },
  computed: {
    //获取 题目数  和 题目列表
    ...mapState(["pageNum", "questions"]),
    queTitle() {
      //获取题目的标题
      return this.questions[this.pageNum - 1].topic_name;
    }
  }
};
</script>

<style lang="scss">
.next_item {
  background-image: url("/image/2-2.png");
}

.submit_item {
  background-image: url("/image/3-1.png");
}

.item_back {
  background-image: url("/image/2-1.png");
  background-size: 100% 100%;
}

.item_title {
  font-size: 0.65rem;
  color: #fff;
  line-height: 0.7rem;
}

.item_list_container {
  margin: 2.5rem;
  padding: 0;
}

.item_list {
  font-size: 0;
  margin-top: 0.4rem;
  width: 10rem;
  span {
    display: inline-block;
    font-size: 0.6rem;
    color: #fff;
    vertical-align: middle;
  }
  .option_style {
    height: 0.725rem;
    width: 0.725rem;
    border: 1px solid #fff;
    border-radius: 50%;
    line-height: 0.725rem;
    text-align: center;
    margin-right: 0.3rem;
    font-size: 0.5rem;
    font-family: "Arial";
  }
  .has_choosed {
    background-color: #ffd400;
    color: #575757;
    border-color: #ffd400;
  }
  .option_detail {
    width: 7.5rem;
    padding-top: 0.11rem;
  }
}
</style>
