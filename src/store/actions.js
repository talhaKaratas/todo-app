import axios from 'axios'
import { router } from '../router/routes'
export default {
  register({ dispatch }, user) {
    axios
      .post(' http://167.172.183.86:3000/api/user/register', user)
      .then(() => {
        dispatch('login', { email: user.email, password: user.password }).then(
          () => {
            router.push('/')
          }
        )
      })
  },

  login({ commit }, user) {
    return axios
      .post(' http://167.172.183.86:3000/user/login', user)
      .then((res) => {
        localStorage.setItem('auth_token', res.data.token)
        commit('setToken', res.data)
      })
  },

  fetchUserInfo({ commit, state }) {
    axios
      .get('http://167.172.183.86:3000/api/user/info', {
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
      .patch('http://167.172.183.86:3000/api/tasks/write', task, {
        headers: {
          auth_token: state.token
        }
      })
      .then((res) => {
        console.log(res)
        commit('adTask', task)
      })
  },

  fetchTasks({ commit, state }) {
    axios
      .get('http://167.172.183.86:3000/api/tasks/get-tasks', {
        headers: {
          auth_token: state.token
        }
      })
      .then((res) => {
        commit('setTasks', res.data)
      })
  },

  deleteTask({ commit, state }, task) {
    axios
      .post('http://167.172.183.86:3000/api/tasks/delete', task, {
        headers: {
          auth_token: state.token
        }
      })
      .then(() => {
        commit('pullFromTasks', task.taskId)
      })
  }
}
