<template>
  <div class="grid">
    <div>
      <h1>图书管理</h1>
      <div class="book">
        <div>
          <label for="id">
            编号：
          </label>
          <input type="text" id="id" v-model="id" />
          <label for="name">
            名称：
          </label>
          <input type="text" id="name" v-model="name" />
          <button @click="addBook">提交</button>
        </div>
        <BookCount :count="many"></BookCount>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th>编号</th>
          <th>名称</th>
          <th>时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in this.books" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.date }}</td>
          <td>
            <!-- @click.prevent="edit(item.id)" -->
            <a href="javascript:;" @click="editbook(item.id)">修改</a>
            <span>|</span>
            <!-- @click.prevent="remove(item.id)" -->
            <a href="" @click.prevent="delbooks(item.id)">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import BookCount from "./components/bookCount";
import axios from "axios";

export default {
  name: "bookstore",
  data() {
    return {
      id: "",
      name: "",
      date: "",
      many: 0,
      books: ""
    };
  },
  created() {
    this.searchBook();
  },
  // async mounted() {
  //   let res = await axios.get("http://localhost:3000/books");
  //   console.log(res);
  // },

  methods: {
    //查询所有
    async searchBook() {
      let res = await axios.get("http://localhost:3000/books");
      if (res.status == 200) {
        this.books = res.data;
      }
    },

    //添加
    async addBook() {
      //添加图书
      //获取 id 和 name
      let res = await axios.post("http://localhost:3000/books", {
        id: this.id,
        name: this.name
      });

      if (res.status == 200) {
        console.log(res.data);
        this.id = "";
        this.name = "";
        this.searchBook();
      }
    },
    editbook(id) {
      console.log(id);
    },
    //删除
    delbooks(id) {
      // let res = await axios.delete(`http://localhost:3000/${id}`);
      // if (res.status == 200) {
      //   alert("删除成功");
      //   this.searchBook();
      // }
      console.log(id);
    }
  },

  //侦听器
  watch: {
    //侦听books
    books() {
      //将长度赋值给 many
      this.many = this.books.length;
    }
  },
  components: {
    BookCount
  }
};
</script>

<style>
.grid {
  margin: auto;
  width: 530px;
  text-align: center;
}

.grid table {
  border-top: 1px solid #c2d89a;
  width: 100%;
  border-collapse: collapse;
}

.grid th,
td {
  padding: 10;
  border: 1px dashed orange;
  height: 35px;
  line-height: 35px;
}

.grid th {
  background-color: orange;
}

.grid .book {
  padding-bottom: 10px;
  padding-top: 5px;
  background-color: orange;
}
</style>
