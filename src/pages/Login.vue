<template>
  <div class="login">
    <Loading
      :active.sync="isLoading"
      :can-cancel="true"
      :is-full-page="true"
    ></Loading>
    <div class="card">
      <div class="card__title">
        <h1>Giriş Yap</h1>
      </div>
      <div class="card__body">
        <form>
          <div class="form__group">
            <label for="loginEmail">E Posta</label>
            <input type="email" id="loginEmail" v-model="user.email" />
          </div>
          <div class="form__group">
            <label for="loginPassword">Şifre</label>
            <input type="password" id="loginPassword" v-model="user.password" />
          </div>
          <p class="error">
            {{ getError }}
          </p>
          <button type="submit" class="btn btn-success" @click.prevent="login">
            Giriş Yap
          </button>
        </form>
      </div>
      <div class="card__footer">
        <p>
          Hesabınız yok mu?
          <strong @click="$router.push('/register')">Kayıt Ol</strong>
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
  name: 'Login',
  components: {
    Loading
  },
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      isLoading: false
    }
  },
  methods: {
    login() {
      this.isLoading = true
      this.$store.dispatch('login', this.user).then(() => {
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
.login {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
}
</style>
