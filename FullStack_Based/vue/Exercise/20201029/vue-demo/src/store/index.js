import { createStore } from "vuex";

export default createStore({
  state: {
    name : "张三",
    aname : "",
    age : 20,
    height : 178
  },
  mutations: {
    changeName(state,msg){
      state.aname = msg;
    }
  },
  actions: {

  },
  modules: {
    
  }
});
