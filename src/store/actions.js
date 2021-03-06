import axios from './axios'
import { router } from '../router/routes'
export default {
  register({ dispatch, commit }, user) {
    return axios
      .post('/api/user/register', user)
      .then(() => {
        dispatch('login', { email: user.email, password: user.password })
      })
      .catch((error) => {
        const err = error.response.data.message
        commit('setError', err)
      })
  },

  login({ commit }, user) {
    return axios
      .post('/api/user/login', user)
      .then((res) => {
        localStorage.setItem('auth_token', res.data.token)
        commit('setToken', res.data)
        router.push('/')
      })
      .catch((error) => {
        const err = error.response.data.message
        commit('setError', err)
      })
  },

  fetchUserInfo({ commit, state }) {
    return axios
      .get('/api/user/info', {
        headers: {
          auth_token: state.token
        }
      })
      .then((res) => {
        commit('setActiveUser', res.data)
      })
  },

  addTask({ commit, state }, task) {
    return axios
      .patch('/api/tasks/write', task, {
        headers: {
          auth_token: state.token
        }
      })
      .then((res) => {
        commit('adTask', res.data)
      })
  },

  fetchTasks({ commit, state }) {
    return axios
      .get('/api/tasks/get-tasks', {
        headers: {
          auth_token: state.token
        }
      })
      .then((res) => {
        commit('setTasks', res.data)
      })
  },

  deleteTask({ commit, state }, task) {
    return axios
      .post(
        '/api/tasks/delete',
        { taskId: task._id },
        {
          headers: {
            auth_token: state.token
          }
        }
      )
      .then(() => {
        commit('pullFromTasks', task)
      })
  },

  isCompleteTask({ commit, state }, task) {
    return axios
      .patch(
        '/api/tasks/completed',
        { taskId: task._id, isComplete: task.completed },
        {
          headers: {
            auth_token: state.token
          }
        }
      )
      .then(() => {
        commit('adTask', task)
      })
  },

  deleteUser({ state }) {
    return axios
      .delete('/api/user/delete', {
        headers: {
          auth_token: state.token
        }
      })
      .then(() => {
        localStorage.removeItem('auth_token')
        state.token = null
      })
  },

  changeUserInfo({ state, commit }, user) {
    return axios
      .patch('/api/user/change-name-or-surname', user, {
        headers: {
          auth_token: state.token
        }
      })
      .then()
      .catch((err) => {
        const error = err.response.data.message
        commit('setError', error)
      })
  },

  changePassword({ state, commit }, passwords) {
    return axios
      .patch('/api/user/change-password', passwords, {
        headers: {
          auth_token: state.token
        }
      })
      .then()
      .catch((err) => {
        const error = err.response.data.message
        commit('setError', error)
      })
  }
}
