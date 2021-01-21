export default {
  setToken(state, payload) {
    state.token = payload.token
  },

  setActiveUser(state, payload) {
    state.activeUser = payload
  },

  adTask(state, payload) {
    if (payload.completed) {
      const index = state.tasks.findIndex((task) => task._id == payload._id)
      state.tasks.splice(index, 1)
      state.completedTasks.unshift(payload)
    } else {
      const index = state.completedTasks.findIndex(
        (task) => task._id == payload._id
      )
      state.completedTasks.splice(index, 1)
      state.tasks.unshift(payload)
    }
  },

  setTasks(state, payload) {
    payload.forEach((task) => {
      if (task.completed) {
        state.completedTasks.push(task)
      } else {
        state.tasks.push(task)
      }
    })
  },

  pullFromTasks(state, payload) {
    if (payload.completed) {
      const index = state.completedTasks.findIndex(
        (task) => task._id == payload._id
      )
      if (index > -1) {
        state.completedTasks.splice(index, 1)
      }
    } else {
      const index = state.tasks.findIndex((task) => task._id == payload._id)
      if (index > -1) {
        state.tasks.splice(index, 1)
      }
    }
  }
}
