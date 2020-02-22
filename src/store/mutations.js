/**
 * 包含多个更新state函数的对象 (包含多个由action触发去直接更新状态的方法的对象)
 */
import {ADD_TODO} from './mutation-type'

export default {
    ADD_TODO (state, {todo}) {
        state.todos.unshift(todo)
    }
}