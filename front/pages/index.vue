<template>
  <div>
    <AddTodo @submit="addTodo" />
    <TodoList :todos="todos" />
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
    methods: {
      async addTodo(title) {
        await axios.post("/v1/todos", { title });
        this.todos.push({
          title
        });
      },
    },
  };

</script>

<style>
</style>
