<template>
  <div class="account">
    <Loading
      :active.sync="isLoading"
      :can-cancel="true"
      :is-full-page="true"
      loader="dots"
      color="blue"
    ></Loading>
    <div class="account__container">
      <div class="accountContainer__title">
        <h1>Hesap</h1>
        <h3 @click="$router.push('/')">Ana Sayfaya Dön</h3>
      </div>
      <div class="accountContainer__body">
        <div class="accountContainer__bodyTop">
          <div class="top__left">
            <h3>Kullanıcı Bilgileri</h3>
            <div class="form__groupAccount">
              <label for="changeName">Ad</label>
              <input type="text" id="changeName" v-model="user.name" />
            </div>
            <div class="form__groupAccount">
              <label for="changeSurname">Soyad</label>
              <input type="text" id="changeSurname" v-model="user.surname" />
            </div>
            <button class="btn btn-primary m-0" @click="changeUserInfo">
              Bilgi Değiştir
            </button>
            <p class="error-l" v-if="lastClickedButton === 1">{{ getError }}</p>
          </div>
          <div class="top__right">
            <h3>Şifre Değiştir</h3>
            <div class="form__groupAccount">
              <label for="changePasswordOld">Mevcut Şifre</label>
              <input
                type="password"
                id="changePasswordOld"
                v-model="passwords.oldPassword"
              />
            </div>
            <div class="form__groupAccount">
              <label for="changePassword">Yeni Şifre</label>
              <input
                type="password"
                id="changePassword"
                v-model="passwords.newPassword"
              />
            </div>
            <button class="btn btn-primary m-0" @click="changePassword">
              Şifre Değiştir
            </button>
            <p class="error-l" v-if="lastClickedButton === 2">{{ getError }}</p>
          </div>
        </div>
        <div class="accountContainer__bodyBottom">
          <button class="delete__account" @click="deleteUser">
            <span>Hesabı Sil</span>
            <md-icon class="m-0 delete__icon">delete</md-icon>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import { mapGetters } from 'vuex'
export default {
  name: 'Account',
  components: {
    Loading
  },
  data() {
    return {
      user: {
        name: '',
        surname: ''
      },
      passwords: {
        oldPassword: '',
        newPassword: ''
      },
      isLoading: false,
      lastClickedButton: 0
    }
  },
  methods: {
    deleteUser() {
      if (confirm('Hesabı kalıcı olarak silmek istediğinize emin misiniz?')) {
        this.isLoading = true
        this.$store.dispatch('deleteUser').then(() => {
          this.isLoading = false
          this.$router.push('/register')
        })
      }
    },
    changeUserInfo() {
      this.lastClickedButton = 1
      this.isLoading = true
      this.$store.dispatch('changeUserInfo', this.user).then(() => {
        this.isLoading = false
        if (!this.getError) {
          alert('Bilgiler Başarıyla Güncellendi')
        }
      })
    },
    changePassword() {
      this.lastClickedButton = 2
      this.isLoading = true
      this.$store.dispatch('changePassword', this.passwords).then(() => {
        this.isLoading = false
        if (!this.getError) {
          alert('Şifre Başarıyla Güncellendi')
        }
      })
    }
  },
  computed: {
    ...mapGetters(['getError'])
  },
  created() {
    this.isLoading = true
    this.$store.dispatch('fetchUserInfo').then(() => {
      const user = this.$store.getters.getActiveUsers
      this.user.name = user.name
      this.user.surname = user.surname
      this.isLoading = false
    })
  },

  watch: {
    'user.name'() {
      this.$store.state.error = null
    },

    'user.surname'() {
      this.$store.state.error = null
    },

    'passwords.oldPassword'() {
      this.$store.state.error = null
    },

    'passwords.newPassword'() {
      this.$store.state.error = null
    }
  }
}
</script>

<style>
.error-l {
  margin: 10px auto;
  color: red;
}

.form__groupAccount {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}

.form__groupAccount label {
  width: 150px;
  font-size: 18px;
}

.form__groupAccount input {
  width: 100%;
  height: 35px;
  outline: none;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.4);
}

.accountContainer__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
}

.accountContainer__title h3 {
  cursor: pointer;
  transition: 0.2s ease;
}

.accountContainer__title h3:hover {
  color: blue;
}

.accountContainer__body {
  padding: 0 40px;
  height: 100%;
}

.accountContainer__bodyTop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70%;
}

.top__left,
.top__right {
  flex: 0.4;
}

.accountContainer__bodyBottom {
  height: 40%;
  position: relative;
}

.delete__account {
  width: 150px;
  height: 40px;
  font-size: 15px;
  color: red;
  border: 2px solid red;
  background: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s ease;
  display: block;
  position: relative;
  top: 80%;
  right: 0;
}

.delete__account span {
  vertical-align: middle;
  margin: 0 5px;
}

.delete__icon {
  vertical-align: middle i !important;
  color: red !important;
  transition: 0ms !important;
}

.delete__account:hover {
  background: red;
}

.delete__account:hover span {
  color: #fff;
}

.delete__account:hover .delete__icon {
  color: #fff !important;
}

.m-0 {
  margin: 0;
}

@media (max-width: 1270px) {
  .top__left,
  .top__right {
    flex: 0.48;
  }
}

@media (max-width: 1100px) {
  .accountContainer__bodyTop {
    flex-direction: column;
  }

  .top__left,
  .top__right {
    flex: 1;
    width: 100%;
  }
}

@media (max-width: 550px) {
  .form__groupAccount {
    flex-direction: column;
    align-items: flex-start;
  }

  .form__groupAccount label {
    margin-bottom: 10px;
  }
}
</style>
