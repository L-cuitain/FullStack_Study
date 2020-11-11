<template>
  <div class="home_container">
    <section>
      <!-- 头部标签 -->
      <header class="top_tips">
        <span class="num_tip">题目 {{ pageNum }}</span>
      </header>
      <!-- 题目内容 -->
      <div class="item_back item_container_style">
        <div class="item_list_container" v-if="questions.length > 0">
          <!-- 题干 -->
          <header class="item_title">{{ pageTitle }}</header>
          <!-- 选项 -->
          <ul>
            <li class="item_list" v-for="(item,index) in itemlist" :key="item.topic_answer_id" @click="changeColor(item.topic_answer_id,index)">
              <span class="option_style" :class="{has_choosed : index == chooseNum }">{{ String.fromCharCode(65+index) }}</span>
              <span class="option_detail">{{ item.answer_name }}</span>
            </li>
          </ul>
        </div>
      </div>
      <span class="next_item button_style" v-if="pageNum < questions.length" @click="nextQues"></span>
      <span class="submit_item button_style" v-else @click="submitQues"></span>
    </section>
  </div>
</template>

<script>
import { computed , ref } from "vue";
//导入vuex  使用vuex中的函数
import { useStore } from "vuex";

//导入路由
import { useRouter } from "vue-router";

export default {
    name : "Item",
    setup(){

        const store = useStore();
        const router = useRouter();

        //创建变量  获取点击的项 id 和 数量
        let chooseId = ref(null);
        let chooseNum = ref(null);

        //#region 初始化数据
        store.dispatch("getData");
        //#endregion

        //#region 渲染页面头部
        let pageNum = computed(() => store.state.pageNum);
        //#endregion

        //#region 题干
        let pageTitle = computed(() => {
            return questions.value[pageNum.value - 1].topic_name;
        })
        //#endregion

        //#region 渲染题目列表
        let questions = computed(() => store.state.questions);
        let itemlist = computed(() => {
            return questions.value[pageNum.value - 1].topic_answer;
        })
        //#endregion


        //#region 点击选中变色
        function changeColor(id , index){
            //将传入的值赋值给 chooseId 和 chooseNum
            chooseId.value = id;
            chooseNum.value = index;
        }
        //#endregion

        //#region 点击下一题
        function nextQues(){
            //判断 chooseNum是否为空
            if(chooseNum.value != null){
                //将答案添加到共享数据中
                store.dispatch("addAswer",chooseId);

                //重置 chooseNum 和 chooseId
                chooseId.value = null;
                chooseNum.value = null;
            }else{
                alert("快选择");
            }
        }
        //#endregion
        
        //#region 提交
        function submitQues(){
            //判断是否选择答案
            if(chooseNum.value != null){
                //如果不为空 将答案添加到共享数据中
                store.dispatch("skipTo",chooseId);

                //跳转路由
                router.push('/score');
                
            }else{
                alert("快选择");
            }
        }
        //#endregion

        //返回数据
        return{
            pageNum,
            pageTitle,
            questions,
            itemlist,
            chooseNum,
            changeColor,
            nextQues,
            submitQues
        }
    }
}
</script>

<style lang="scss">
.home_container {
  height: 100%;
  background-image: url("/images/1-1.jpg");
}
.next_item {
  background-image: url("/images/2-2.png");
}

.submit_item {
  background-image: url("/images/3-1.png");
}

.item_back {
  background-image: url("/images/2-1.png");
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