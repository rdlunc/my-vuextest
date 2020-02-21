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

export default {
  name: 'App',
  data(){
    return {
      count: 0
    }
  },
  computed: {
    evenOrOdd() {
      return this.count % 2 === 0 ? '偶数' : '奇数';
    }
  },
  methods: {
    //增加
    increment() {
      let count = this.count;
      this.count = ++count;
    },
    //减少
    decrement() {
      let count = this.count;
      this.count = --count;
    },
    //如果是奇数才增加
    incrementIfOdd() {
      let count = this.count;
      if(count % 2 === 1){
        this.count = count + 1;
      }
    },
    //过1秒才增加
    incrementAsync() {
      setTimeout(() => {
        let count = this.count;
        this.count = count + 1;
      }, 1000)
    }
  }
}
</script>

<style>

</style>
