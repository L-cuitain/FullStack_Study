import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state() {
    return {
      list : []
    };
  },
  mutations: {
    //同步获取数据  将数据添加到list中
    //state
    initData(state,payload){
      state.list = payload.data;
    },

    //添加事件
    addData(state,payload){
      state.list.push(payload);
    },

    //删除事件
    delData(state,id){
      //找到相对应的id
      let index = state.list.findIndex(item => {
        return item.id == id;
      });
      //将此事项从列表中删除
      state.list.splice(index,1);
    },

    //更新状态
    updateData(state,status){
      //查询对应的事项
      state.list.some(item => {
        if(item.id == status.id){
          item.done = status.done;
          return true;
        }
      })
    },

    //显示剩余数量
    showCount(state){
      //找出所有 状态为false 的 事项
      state.filter(item => {
        if(item.done == false){
          
        }
      })
    }
  },
  actions: {
    //异步请求数据
    async getData(context){
      //通过axios请求json数据
      let data = await axios.get("/list.json");  
      //将数据发送给同步方法
      context.commit("initData",data);
      
    }
  },
  modules: {}
});
