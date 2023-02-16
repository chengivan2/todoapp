import React from 'react';

const Form = ( {inputText, setInputText, todos, setTodos, setStatus, filter, top}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTaskHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {text: inputText, completed: false, id : Math.random() * 1000}]);
        setInputText(''); //Reset the state
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <form className="form-card flex flex-col p-[5%] w-[90vw] md:w-[100%]">
            <input value={inputText} placeholder="Add a new Task" onChange={inputTextHandler} type="text" className="text-white todo-input bg-transparent border-b-[1px] outline-none" />
            <button onClick={submitTaskHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
            </button>
            <div className= {"select" +" " + (filter ? 'display-form' : 'not-display-form')}>
                <select onChange={statusHandler} name="todos" className="bg-transparent border-b-[1px] outline-none filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}


export default Form;