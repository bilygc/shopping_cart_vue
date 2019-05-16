<template>
  <div class="home">
    <ShoppingCart msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ShoppingCart from '@/components/ShoppingCart.vue'

export default {
  name: 'home',
  components: {
    ShoppingCart
  }
}
</script>
