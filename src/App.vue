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
  width: 70px;
  font-size: 18px;
}

.form__group input {
  width: 350px;
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
</style>
