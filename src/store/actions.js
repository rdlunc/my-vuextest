/**
 * 包含多个对应事件回调函数的对象 (包含多个接收组件通知触发mutation调用间接更新状态的方法的对象)
 */
import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, DELETE_COMPLETE_TODOS} from './mutation-type'

export default {
    addTodo ({commit}, todo) {
        commit(ADD_TODO, {todo})
    },
    deleteTodo({commit}, index) {
        commit(DELETE_TODO, {index})
    },
    selectAllTodos({commit}, isSelectAll) {
        commit(SELECT_ALL_TODOS, {isSelectAll})
    },
    deleteCompleteTodos({commit}) {
        commit(DELETE_COMPLETE_TODOS)
    }
}