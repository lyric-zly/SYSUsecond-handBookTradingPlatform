import Vuex from 'vuex';

export default new Vuex.Store({
  state: {
    username: '',
    nickname: '',
    token: '',
  },
  mutations: {
    login(state, payload) {
      state.username = payload.username;
      state.password = payload.nickname;
      state.token = payload.token;
    },
  },
});
