/**
 * 包含多个对应事件回调函数的对象 (包含多个接收组件通知触发mutation调用间接更新状态的方法的对象)
 */
import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, DELETE_COMPLETE_TODOS, RECEIVE_TODOS} from './mutation-type'
import storageUtils from '../utils/storageUtils'

export default {
    //添加
    addTodo ({commit}, todo) {
        commit(ADD_TODO, {todo})
    },
    //删除
    deleteTodo({commit}, index) {
        commit(DELETE_TODO, {index})
    },
    //全选或全不选
    selectAllTodos({commit}, isSelectAll) {
        commit(SELECT_ALL_TODOS, {isSelectAll})
    },
    //删除全部选中的
    deleteCompleteTodos({commit}) {
        commit(DELETE_COMPLETE_TODOS)
    },
    //异步获取todos并更新状态
    reqTodos({commit}) {
        //模拟
        setTimeout(() => {
            //读取数据 (从local存储中读取保存的todos)
            const todos = storageUtils.readTodos();
            //接收todos
            commit(RECEIVE_TODOS, {todos})
        }, 1000)
    }
}