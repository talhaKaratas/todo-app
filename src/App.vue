<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.card {
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
  margin-top: -80px;
  width: 40%;
}

.card__title {
  padding: 15px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
}

.card__body {
  padding: 15px 20px;
}

.form__group {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}

.form__group label {
  width: 80px;
  font-size: 18px;
}

.form__group input {
  width: 100%;
  height: 35px;
  outline: none;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.4);
}

.btn {
  width: 120px;
  height: 35px;
  display: block;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 auto;
  background: none;
  outline: none;
  font-size: 16px;
  transition: 0.4s ease;
  margin-bottom: 10px;
}

.btn-primary {
  border: 2px solid blue;
  color: blue;
}

.btn-primary:hover {
  background: blue;
  color: #fff;
}

.btn-success {
  border: 2px solid green;
  color: green;
}

.btn-success:hover {
  background: green;
  color: #fff;
}

.card__footer {
  text-align: center;
  padding: 10px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.4);
}

.card__footer p strong {
  cursor: pointer;
  transition: 0.2s ease;
}

.card__footer p strong:hover {
  color: blue;
}

.error {
  text-align: center;
  margin: 10px 0;
  color: red;
}

@media (max-width: 1000px) {
  .card {
    width: 60%;
  }
}

@media (max-width: 700px) {
  .card {
    width: 70%;
  }
}

@media (max-width: 550px) {
  .card {
    width: 85%;
    margin-top: 0;
  }
}

@media (max-width: 400px) {
  .form__group {
    display: block;
  }
  .form__group label {
    display: block;
    margin-bottom: 10px;
  }
}

/* HOME AND ACCOUNT CLASSES */
.home,
.account {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff9ea;
}

.task__container,
.account__container {
  width: 80%;
  height: 80%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 3px 4px 12px rgba(0, 0, 0, 0.6);
  overflow-y: scroll;
}

.task__container::-webkit-scrollbar,
.account__container::-webkit-scrollbar {
  width: 8px;
}

.task__container::-webkit-scrollbar-thumb,
.account__container::-webkit-scrollbar-thumb {
  background: #caccd1;
  border-radius: 0 4px 4px 0;
}

@media (max-width: 850px) {
  .task__container,
  .account__container {
    width: 90%;
    height: 90%;
  }
}

@media (max-width: 550px) {
  .task__container,
  .account__container {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
}
</style>
