import React, {useState} from 'react';
import './App.css';
import Form from './components/form.js'
import TodoList from './components/todolist.js';

function App() {

  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App">
      Hello World!
      <Form todos = {tasks} setTodos = {setTasks} inputText = {inputText} setInputText = {setInputText} />
      <TodoList todos = {tasks} setTodos = {setTasks} />
    </div>
  );
}

export default App;
