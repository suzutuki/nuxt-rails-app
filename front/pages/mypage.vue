<template>
  <div>
    <div v-if="user">
      <p>Email: {{ user.email }}</p>
      <p>名前: {{ user.name }}</p>
    </div>
    <!-- クリックするとmethodsで宣言されているasync logOut()が呼び出される。 -->
    <v-btn @click="logOut">LOGOUT</v-btn>
  </div>
</template>

<script>
  import firebase from "@/plugins/firebase";
  export default {
    computed: {
      user() {
        // 現在Vuexに保存されているユーザーの情報を表示
        return this.$store.state.auth.currentUser;
      },
    },
    methods: {
      async logOut() {
        await firebase
          .auth()
          .signOut()
          .catch((error) => {
            console.log(error);
          });
// ユーザーの情報を空にしてVuexのstateを変更する
        this.$store.dispatch("auth/setUser", null);
        // ログイン画面に戻る
        this.$router.push("/login");
      },
    },
  };

</script>

<style>
</style>
