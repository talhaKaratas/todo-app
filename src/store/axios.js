import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://server.talhakaratas.cf'
})

export default instance
