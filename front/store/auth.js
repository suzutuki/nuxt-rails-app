export const state = () => ({
  // currentUserという値として、ユーザーの情報の入れ物を作成
    currentUser: null
  });
  
  export const mutations = {
    // stateに書き込むメソッドを作成
    setUser(state, payload) {
    // 第二引数として渡ってきた情報をcurrentUserに入れている
      state.currentUser = payload
    },
  };
  
  export const actions = {
  // コンテキストオブジェクトのStoreインスタンスを受け取って、
  // setUserという名前でmutationsを呼び出す。
    setUser (context, data) {
      context.commit('setUser', data)
    }
  };