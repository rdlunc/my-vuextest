/**
 * 包含多个对应事件回调函数的对象 (包含多个接收组件通知触发mutation调用间接更新状态的方法的对象)
 */
import {ADD_TODO} from './mutation-type'

export default {
    addTodo ({commit}, todo) {
        commit(ADD_TODO, {todo})
    }
}