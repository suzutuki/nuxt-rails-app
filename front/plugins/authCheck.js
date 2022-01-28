import firebase from "@/plugins/firebase";
import axios from "@/plugins/axios";

const authCheck = ({ store, redirect }) => {
    // onAuthStateChanged ログイン状態のユーザーの情報をFirebaseへ確認
  firebase.auth().onAuthStateChanged(async user => {
    if (user) {
      const { data } = await axios.get('/v1/users', {
        params: {
          uid: user.uid,
        },
      });
      console.log("ログインしているユーザー:", data);
    //   auth.jsのsetUserアクションに適用
      store.dispatch("auth/setUser", data)
    } else {
      store.dispatch("auth/setUser", null)
    }
  });
};

export default authCheck;
