//引入 vuex
import { createStore } from "vuex";

// 配置

//创建仓库
//实现共享 的 参数 或 方法
export default createStore({
  //存数据
  //State提供唯一的公共数据源  所有共享数据都统一放到Store的State中进行存储
  state() {
    return {
      name: "滑稽",
      age: 20,
      count: 0
    };
  },

  //存方法(同步方法  异步方法)
  //mutations 用于修改Store中的数据
  mutations: {
    // //创建方法 无参
    // changeAge(state) {
    //   state.age = 18;
    // },
    // //有参
    // changeName(state,uname) {
    //   state.name = uname;
    // },

    add(state, val) {
      state.count += val;
    }
  },
  //actions用于处理异步任务
  actions: {
    asyncAdd(context, val) {
      console.log(context);
      setInterval(function() {
        //用commit 触发同步方法
        context.commit("add", val);
        console.log(val);
      }, 1000);
    }
  },

  //存computed  getters 用于对store中的数据进行加工处理形成新的数据
  getters: {}
});
