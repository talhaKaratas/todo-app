<template>
  <div class="register">
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
import { mapGetters } from 'vuex'
export default {
  name: 'Register',
  data() {
    return {
      user: {
        name: '',
        surname: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    register() {
      this.$store.dispatch('register', this.user)
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
