export default {
  getActiveUsers(state) {
    return state.activeUser
  },

  getTasks(state) {
    return state.tasks
  },

  getCompletedTasks(state) {
    return state.completedTasks
  }
}
