import React from 'react'
import { useSelector } from 'react-redux'
import Login from './Login'
import Todo from './Todo'
import Header from './Header'
import DisplayTodos from './DisplayTodos'

function TodoApp() {
    const todo = useSelector(state=>state.TodoApp)
    return (
       todo.isLogin? <div className="todoapp">
                    <Header />
                    <Todo />
                    <DisplayTodos />
                    

                </div> : <Login />
    )
}

export default TodoApp
