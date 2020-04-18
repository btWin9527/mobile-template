const state = {
  testState: false // 测试vuex数据
}

const getters = {
  testState: state => state.testState,
}

const mutations = {
  SET_TEST_STATE: (state, testState) => {
    state.testState = testState
  }
}

const actions = {
  setTestState({commit}, payload) {
    commit('SET_TEST_STATE', payload);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
