import { createStore } from "vuex";

//导入axios
import axios from "axios";

export default createStore({
  state() {
    return{
      //显示标题
      level : "第一周",
      //题目数量
      pageNum : 1,
      //用户选择的答案
      userAnswer : [],
      rightAnswer: [2, 6, 10, 14, 18], //正确答案
      //创建questions  保存题目
      //总分数
      totalScore : 0,
      questions : [],
    }
  },
  mutations: {
    //初始化数据
    initData(state,payload){
      state.questions = payload.data;
    },

    //添加答案
    addUserAswer(state,payload){
      state.userAnswer.push(payload.value);
      console.log(state.userAnswer);
    },

    //添加页数
    addNum(state,payload){
      state.pageNum += payload;
    },

    //计算总分数
    getTotal(state){
      state.rightAnswer.forEach((item,index) => {
        if(item == state.userAnswer[index]){
          state.totalScore += 20;
        }
      })

      console.log(state.totalScore);
    }
  },
  actions: {
    //创建方法  获取json中的数据
    async getData(context){
      //获取数据
      let data = await axios.get("/data/question.json");
      
      //将数据发送给同步方法
      context.commit("initData",data);
    },

    //创建方法  将获取的值存到答案中
    addAswer(context,payload){
      context.commit("addUserAswer",payload);

      context.commit("addNum",1);
    },

    //创建方法跳转
    skipTo(context,payload){
      context.commit("addUserAswer",payload);

      context.commit("getTotal");
    }
  },
  modules: {}
});
