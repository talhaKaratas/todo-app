export default {
  setToken(state, payload) {
    state.token = payload.token
  },

  setActiveUser(state, payload) {
    state.activeUser = payload
  },

  adTask(state, payload) {
    state.tasks.unshift(payload)
  },

  setTasks(state, payload) {
    state.tasks = payload
  },

  pullFromTasks(state, id) {
    const index = state.tasks.findIndex((task) => task._id == id)
    if (index > -1) {
      state.tasks.splice(index, 1)
    }
  }
}
