import axios from 'axios'
import config from './config'
import { router } from '../router/routes'
export default {
  register({ dispatch, commit }, user) {
    return axios
      .post(`${config.baseUrl}/api/user/register`, user)
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
      .post(`${config.baseUrl}/api/user/login`, user)
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
    axios
      .get(`${config.baseUrl}/api/user/info`, {
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
      .patch(`${config.baseUrl}/api/tasks/write`, task, {
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
      .get(`${config.baseUrl}/api/tasks/get-tasks`, {
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
        `${config.baseUrl}/api/tasks/delete`,
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
        `${config.baseUrl}/api/tasks/completed`,
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
      .delete(`${config.baseUrl}/api/user/delete`, {
        headers: {
          auth_token: state.token
        }
      })
      .then(() => {
        localStorage.removeItem('auth_token')
        state.token = null
      })
  }
}
