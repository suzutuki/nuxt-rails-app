export const state = () => ({
    isLoading: false
  });
  
  export const mutations = {
    setLoading(state, payload) {
      state.isLoading = payload
    }
  };
//   setLoadingが呼び出されると、その値がMutation,stateと伝播し、isLoadingの値を変える。
  export const actions = {
    setLoading(context, data) {
      context.commit('setLoading', data)
    }
  };