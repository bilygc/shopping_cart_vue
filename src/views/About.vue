<template>
  <div class="about">
    <!-- <h1>Autor: {{$store.state.session.name}}</h1> -->
    <!-- <h1>Autor: {{session.name}}</h1> -->
    <!-- <h1>Autor: {{fullName}}</h1> -->
    <input type="text" v-model="name">
    <button @click="changeName">Cambiar</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'About',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    changeName(){
      // FORMA CON MUTATION
      // this.$store.commit('setName', this.name);
      
      // FORMA  CON ACTIONS
      // this.$store.dispatch('asyncSetName', this.name);
      // FOMRA CON MAPACTIONS
      this.asyncSetName(this.name);
    },
    ...mapActions(['asyncSetName'])
  },
  computed: {
    // ...mapState(['session']),
    // ...mapGetters(['fullName'])
  }
}
</script>
