<template>
<!-- <v-form>というタグで囲まれたTODO追加のフォームが、コンポーネントとして表示される -->
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
<!-- v-model="title"とすることで、<script>のdata()の中で宣言されているtitleとデータを紐づける -->
          <v-text-field v-model="title" counter="10" label="todo" required></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
<!-- @clickという記法を使って、このボタンをクリックしたときに、methodsの中で定義した関数を呼び出す -->
<!-- クリックをすると、methodsに登録しているhandleSubmitと言う関数を実行 -->
          <v-btn @click="handleSubmit">作成</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      title: ""
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("submit", this.title);
      this.title = "";
    }
  }
};
</script>

<style>
</style>

