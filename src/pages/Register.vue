<template>
  <div class="register">
    <Loading
      :active.sync="isLoading"
      :can-cancel="true"
      :is-full-page="true"
      loader="dots"
      color="blue"
    ></Loading>
    <div class="card">
      <div class="card__title">
        <h1>Kayıt Ol</h1>
      </div>
      <div class="card__body">
        <form>
          <div class="form__group">
            <label for="registerName">Ad</label>
            <input type="text" id="registerName" v-model="user.name" />
          </div>
          <div class="form__group">
            <label for="registerSurname">Soyad</label>
            <input type="text" id="registerSurname" v-model="user.surname" />
          </div>
          <div class="form__group">
            <label for="registerEmail">E Posta</label>
            <input type="email" id="registerEmail" v-model="user.email" />
          </div>
          <div class="form__group">
            <label for="registerPassword">Şifre</label>
            <input
              type="password"
              id="registerPassword"
              v-model="user.password"
            />
          </div>
          <p class="error">
            {{ getError }}
          </p>
          <button
            type="submit"
            class="btn btn-primary"
            @click.prevent="register"
          >
            Kayıt Ol
          </button>
        </form>
      </div>
      <div class="card__footer">
        <p>
          Daha önce kayıt oldunuz mu?
          <strong @click="$router.push('/login')">Giriş Yap</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import { mapGetters } from 'vuex'
export default {
  name: 'Register',
  components: {
    Loading
  },
  data() {
    return {
      user: {
        name: '',
        surname: '',
        email: '',
        password: ''
      },
      isLoading: false
    }
  },
  methods: {
    register() {
      this.isLoading = true
      this.$store.dispatch('register', this.user).then(() => {
        this.isLoading = false
      })
    }
  },
  computed: {
    ...mapGetters(['getError'])
  }
}
</script>

<style>
.register {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
}
</style>
