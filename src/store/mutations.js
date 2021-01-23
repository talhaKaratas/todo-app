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
      if (index > -1) {
        state.tasks.splice(index, 1)
      }
      state.completedTasks.unshift(payload)
    } else {
      const index = state.completedTasks.findIndex(
        (task) => task._id == payload._id
      )
      if (index > -1) {
        state.completedTasks.splice(index, 1)
      }
      if (state.tasks.length == 0) {
        state.tasks.push(payload)
      } else {
        let count = 0
        state.tasks.forEach((task, index) => {
          if (Date.parse(payload.date) > Date.parse(task.date) && count == 0) {
            count++
            state.tasks.splice(index, 0, payload)
          } else {
            if (index + 1 === state.tasks.length) {
              state.tasks.push(payload)
            }
          }
        })
      }
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
