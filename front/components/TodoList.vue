<template>
  <!-- <v-card>の中にTODOリストのタイトルやテーブルを表示 -->
  <v-card>
    <v-card-title>
      Todo List
      <v-spacer></v-spacer>
      <!-- TODOリストの検索バーを作成。v-modelで渡している値は検索バーに入っている初期値 -->
      <v-text-field
        v-model="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <!-- テキストフィールドで入力した値が、searchという値に入り
   それがそのまま<v-text-table>のsearchプロパティの値として利用される -->
    </v-card-title>
    <!-- :headersというプロパティにはvueのheadersという変数の値が当てられている -->
    <v-data-table :headers="headers" :items="todos" :search="search">
      <template v-slot:item.action="{ item }">
        <v-icon small @click="deleteItem(item)">delete</v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import axios from "@/plugins/axios";

export default {
  // index.vueでは:todos="todos"の部分で、todosというデータをTodoList.vueに渡していた。
  // この左側の:todosに当たる部分が、今回のpropsに定義している部分
  // propsは、親コンポーネントから子コンポーネントに値を渡す時に使う
  props: ["todos"],
    data() {
      return {
        search: "",
        headers: [{
            text: "タイトル",
            align: "left",
            value: "title"
          },
          {
            text: "ユーザー名",
            value: "username"
          }, 
          {
            text: "Actions",
            value: "action",
          },
        ]
      };
    }, 
 computed: {
      user() {
        return this.$store.state.auth.currentUser;
      }
    },
    methods: {
      async deleteItem(item) {
        const res = confirm("本当に削除しますか？");
        if (res) {
          await axios.delete(`/v1/todos/${item.id}`);
          const todos = this.user.todos.filter((todo) => {
            return todo.id !== item.id;
          });
          const newUser = {
            ...this.user,
            todos,
          };
          this.$store.commit("auth/setUser", newUser);
        }
      },
    }
};
</script>

<style>
</style>
