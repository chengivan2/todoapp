import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/form.js'
import TodoList from './components/todolist.js';

function App() {

  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect( () => filterHandler(), [tasks, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTasks(tasks.filter((todo) => todo.completed === true));
        break;
    
      case 'uncompleted':
        setFilteredTasks(tasks.filter((todo) => todo.completed === false));
        break;

      default:
        setFilteredTasks(tasks);
        break;
    }
  }
  return (
    <div className="App">
      Hello World!
      <Form 
        todos = {tasks} 
        setTodos = {setTasks} 
        inputText = {inputText} 
        setInputText = {setInputText}
        status = {status}
        setStatus = {setStatus} />
      
      <TodoList todos = {tasks} 
                setTodos = {setTasks}
                filteredTodos = {filteredTasks} />
    </div>
  );
}

export default App;
