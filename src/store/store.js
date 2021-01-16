import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

export const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
