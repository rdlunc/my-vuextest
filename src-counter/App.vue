<template>
  <div>
    <p>click: {{count}} times, count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>

  import {mapState, mapGetters, mapActions} from 'vuex'

  export default {
    name: 'App',
    computed: {
      ...mapState(['count']), //mapState()返回值：{ count(){return this.$store.state['count']} }
      ...mapGetters({evenOrOdd: 'evenOrOdd_custom'}) //mapGetters()返回值：{ evenOrOdd（）{return this.$store.getters['evenOrOdd']} }
    },
    methods: {
      ...mapActions(['increment','decrement','incrementIfOdd','incrementAsync'])
    }
  }
</script>

<style>

</style>
