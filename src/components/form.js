import React from 'react';

const Form = ( {inputText, setInputText, todos, setTodos}) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const submitTaskHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {text: inputText, completed: false, id : Math.random() * 1000}]);
        setInputText(''); //Reset the state
    }
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" class="todo-input" />
            <button onClick={submitTaskHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" class="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}


export default Form;