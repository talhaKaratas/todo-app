<template>
  <div class="home">
    <Loading
      :active.sync="getHomeIsLoading"
      :can-cancel="true"
      :is-full-page="true"
      loader="dots"
      color="blue"
    ></Loading>
    <div class="task__container">
      <div class="taskContainer__title">
        <div class="user__info">
          <md-avatar class="md-avatar-icon md-primary mt-0">{{
            getActiveUsers.name | sub
          }}</md-avatar>
          <p>{{ getActiveUsers.name }} {{ getActiveUsers.surname }}</p>
        </div>
        <md-menu md-size="big" md-direction="bottom-end">
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>more_vert</md-icon>
          </md-button>

          <md-menu-content>
            <md-menu-item @click="exit">
              <span>Çıkış Yap</span>
              <md-icon>exit_to_app</md-icon>
            </md-menu-item>

            <md-menu-item @click="$router.push('/account')">
              <span>Ayarlar</span>
              <md-icon>settings</md-icon>
            </md-menu-item>
          </md-menu-content>
        </md-menu>
      </div>
      <div class="taskContainer__body">
        <div class="task">
          <input type="text" placeholder="Görev Yaz" v-model="task" />
          <p v-if="task.length > 0" @click="addTask">Ekle</p>
        </div>
        <Task v-for="task in getTasks" :key="task._id" :task="task" />
        <div class="completedTasks" v-if="getCompletedTasks.length">
          <h1>Tamamlananlar</h1>
          <Task
            v-for="task in getCompletedTasks"
            :key="task._id"
            :task="task"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import Task from '../components/Task'
import { mapGetters } from 'vuex'
export default {
  components: {
    Task,
    Loading
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
      this.$store.commit('setHomeIsLoading', true)
      this.$store.dispatch('addTask', { task: this.task }).then(() => {
        this.task = ''
        this.$store.commit('setHomeIsLoading', false)
      })
    }
  },
  created() {
    this.$store.commit('setHomeIsLoading', true)
    this.$store.dispatch('fetchUserInfo')
    this.$store.dispatch('fetchTasks').then(() => {
      this.$store.commit('setHomeIsLoading', false)
    })
  },
  computed: {
    ...mapGetters([
      'getActiveUsers',
      'getTasks',
      'getCompletedTasks',
      'getHomeIsLoading'
    ])
  },

  filters: {
    sub(name) {
      return name.substring(0, 1)
    }
  }
}
</script>

<style>
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
