import React from "react";


const Task = ({text, todo, todos, setTodos}) => {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    const completeHandler = () => {
        setTodos(todos.map((el) => {
            if (el.id === todo.id)
                return {
                    ...el, completed: !el.completed
                }
            return el;
        }))
    }
    return (
        <div className="border-2 rounded-xl task-card task-item">
            <li className={`task ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>        
        </div>
    );
}

export default Task;
