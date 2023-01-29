import React from 'react';
import Task from './task.js'

const TodoList = ({todos, setTodos, filteredTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => ( <Task 
                                            todos = {todos} 
                                            setTodos = {setTodos} 
                                            todo = {todo} 
                                            text = {todo.text} 
                                            key = {todo.id} 
                                        />
                                      )
                          )
                }
            </ul>
        </div>
    )
}


export default TodoList;