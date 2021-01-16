<template>
  <div class="login">
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
export default {
  name: 'Login',
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', this.user).then(() => {
        this.$router.push('/')
      })
    }
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
