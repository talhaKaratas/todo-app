export default {
  token: localStorage.getItem('auth_token') || null,
  activeUser: {},
  tasks: []
}