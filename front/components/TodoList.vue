<template>
<!-- <v-card>の中にTODOリストのタイトルやテーブルを表示 -->
  <v-card>
    <v-card-title>
      Todo List
      <v-spacer></v-spacer>
      <!-- TODOリストの検索バーを作成。v-modelで渡している値は検索バーに入っている初期値 -->
      <v-text-field v-model="search" label="Search" single-line hide-details></v-text-field>
   <!-- テキストフィールドで入力した値が、searchという値に入り
   それがそのまま<v-text-table>のsearchプロパティの値として利用される -->
    </v-card-title>
    <!-- :headersというプロパティにはvueのheadersという変数の値が当てられている -->
    <v-data-table :headers="headers" :items="todos" :search="search"></v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
// titleはheadersのvalueがtitleの列に、usernameはheadersのvalueがusernameの列へ表示される
      todos: [
        {
          title: "test",
          username: "太郎"
        }
      ],
      search: "",
      headers: [
        {
          text: "タイトル",
          align: "left",
          sortable: false,
          value: "title"
        },
        { text: "ユーザー名", 
          value: "username"
        }
      ]
    };
  }
};
</script>

<style>
</style>
