/**
 * 包含多个更新state函数的对象 (包含多个由action触发去直接更新状态的方法的对象)
 */
import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, DELETE_COMPLETE_TODOS, RECEIVE_TODOS} from './mutation-type'

export default {
    [ADD_TODO](state, {todo}) {
        state.todos.unshift(todo)
    },
    [DELETE_TODO](state, {index}){
        state.todos.splice(index, 1)
    },
    [SELECT_ALL_TODOS](state, {isSelectAll}) {
        state.todos.forEach(todo => {
          todo.complete = isSelectAll
        })
    },
    [DELETE_COMPLETE_TODOS](state) {
        state.todos = state.todos.filter(todo => !todo.complete)
    },
    [RECEIVE_TODOS](state, {todos}) {
        state.todos = todos
    }
}