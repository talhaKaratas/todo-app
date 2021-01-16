<template>
  <div class="home">
    <div class="task__container">
      <div class="taskContainer__title">
        <div class="user__info">
          <md-avatar class="md-avatar-icon md-primary mt-0">{{
            getActiveUsers.name | sub
          }}</md-avatar>
          <p>{{ getActiveUsers.name }} {{ getActiveUsers.surname }}</p>
        </div>
        <h3 class="exist__button" @click="exit">Çıkış Yap</h3>
      </div>
      <div class="taskContainer__body">
        <div class="task">
          <input type="text" placeholder="Görev Yaz" v-model="task" />
          <p v-if="task.length > 0" @click="addTask">Ekle</p>
        </div>
        <Task v-for="task in getTasks" :key="task._id" :task="task" />
      </div>
    </div>
  </div>
</template>

<script>
import Task from '../components/Task'
import { mapGetters } from 'vuex'
export default {
  components: {
    Task
  },
  data() {
    return {
      task: ''
    }
  },
  methods: {
    exit() {
      localStorage.removeItem('auth_token')
      location.reload()
    },
    addTask() {
      this.$store.dispatch('addTask', { task: this.task }).then(() => {
        this.task = ''
      })
    }
  },
  created() {
    this.$store.dispatch('fetchUserInfo')
    this.$store.dispatch('fetchTasks')
  },
  computed: {
    ...mapGetters(['getActiveUsers', 'getTasks'])
  },

  filters: {
    sub(name) {
      return name.substring(0, 1)
    }
  }
}
</script>

<style>
.home {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background: #fff9ea;
}

.task__container {
  width: 80%;
  height: 80%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 3px 4px 12px rgba(0, 0, 0, 0.6);
}

.taskContainer__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  padding: 10px 20px;
}

.user__info {
  display: flex;
  align-items: center;
}

.user__info > p {
  margin-left: 10px;
}

.exist__button {
  cursor: pointer;
  color: #ccc;
  transition: 0.3s ease;
}

.exist__button:hover {
  color: #000;
}

.taskContainer__body {
  padding: 0 20px;
}

.task {
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin: 20px 0;
  height: 40px;
}

.task input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
}

.task p {
  cursor: pointer;
}

.mt-0 {
  margin: 0 !important;
}
</style>
