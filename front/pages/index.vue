<template>
  <div v-if="user">
    <p>名前：{{ user.name }}</p>
    <AddTodo @submit="addTodo" />
    <!-- :todosの値は、Vuexで管理しているcurrentUserのtodoプロパティの値を送る。 -->
    <TodoList :todos="user.todos" />
  </div>
</template>

<script>
// <script>の中でimportし、importしたコンポーネントをexportの中でcomponentsに登録
import AddTodo from "@/components/AddTodo";
// @はv-on:@submit="addTodo"の省略形
import TodoList from "@/components/TodoList";
// axiosのインポート
import axios from "@/plugins/axios";
export default {
  components: {
    AddTodo,
    TodoList,
  },
  data() {
    return {
      todos: [],
    };
  },
  // 正しい場所にuserと書くと、computedプロパティが動き、
  // storeの中のauth.jsのstateのcurrentUserという値が返される。
  computed: {
    user() {
      return this.$store.state.auth.currentUser;
    },
  },
  created() {
    console.log("API_KEY:", process.env.API_KEY);
  },
  methods: {
    async addTodo(todo) {
      const { data } = await axios.post("/v1/todos", { todo });
      this.$store.dispatch("auth/setUser", {
        ...this.user,
        todos: [...this.user.todos, data],
      });
    },
  },
};
</script>

<style>
</style>
