<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="./assets/logo.png">
    <ShoppingCart/>
  </div>
</template>

<script>
import ShoppingCart from './components/ShoppingCart.vue';

export default {
  name: 'app',
  components: {
    ShoppingCart
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo{
  width: 150px;
}
</style>
