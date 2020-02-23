<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader/>
      <TodoList/>
      <TodoFooter/>
    </div>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'
  import storageUtils from './utils/storageUtils'

  export default {
/*    mounted() {
      //从local存储中读取保存的todos
      //this.todos = JSON.parse(localStorage.getItem('todos_key') || '[]')
      this.todos = storageUtils.readTodos()
    },
*/
    // methods: {
    //   // 删除所有已完成的
    //   deleteCompleteTodos () {
    //     this.todos = this.todos.filter(todo => !todo.complete)
    //   },
    //
    //   // 全选/全不选
    //   selectAll (isSelectAll) {
    //     this.todos.forEach(todo => {
    //       todo.complete = isSelectAll
    //     })
    //   }
    // },

/*    watch: {
      todos: {
        deep: true, // 深度监视
        /!*handler: function (val) {
          // 将数据(json)保存到localStorage
          // localStorage.setItem('todos_key', JSON.stringify(val))
          storageUtils.saveTodos(val)
        }*!/
        // handler的值应该是一个函数, 且函数应该要有一个形参(接收todos最新的值)
        handler: storageUtils.saveTodos,
        /!*handler: function  (todos) {
          localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
        }*!/
      }
    },
*/

    components: {
      TodoHeader,
      TodoList,
      TodoFooter
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>