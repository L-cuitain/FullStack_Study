import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state() {
    return {
      //等级
      level: "第一周",
      //题目数
      pageNum: 1,
      //用户选择答案
      answerId: [],
      //正确答案
      rightAnswers: ["A", "C", "D", "A", "B"],
      //总分数
      totalScore: 0,
      //问题
      questions: []
    };
  },
  mutations: {
    //初始化数据
    initData(state, payload) {
      console.log(payload);
      state.questions = payload.data;
    },
    //同步执行将 用户选择的答案添加到 answerId数组中
    addAnswerId(state, payload) {
      //将值添加到数组中
      state.answerId.push(payload);
    },
    //判断如果 题目数量 小于 问题数量  就增长题目数量
    addNum(state, payload) {
      if (state.pageNum < state.questions.length) {
        state.pageNum += payload;
      }
    },
    //判断用户选择的答案和正确答案是否匹配
    checkScore(state) {
      console.log(state.answerId);
      state.rightAnswers.forEach((item, index) => {
        if (item == state.answerId[index]) {
          state.totalScore += 10;
        }
      });
    }
  },
  actions: {
    //使用axios请求数据
    async getQuestion(context) {
      let res = await axios.get("/data/question.json");

      context.commit("initData", res);
    },
    //添加数据
    addNum(context, payload) {
      context.commit("addAnswerId", payload);

      context.commit("addNum", 1);
    }
  },
  modules: {}
});
