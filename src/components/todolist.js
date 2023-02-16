import React from 'react';
import Task from './task.js';

const TodoList = ({todos, setTodos, filteredTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list grid grid-cols-1 gap-4">
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