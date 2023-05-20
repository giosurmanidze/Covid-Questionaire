import { createStore } from 'vuex'
import getters from './getters'
import state from './state'
import mutations from './mutations'

export default createStore({
  state,
  mutations,
  getters,
  actions: {},
  modules: {}
})
