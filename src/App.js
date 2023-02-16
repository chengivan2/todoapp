import React, {useState, useEffect} from 'react';
import { Circle } from 'rc-progress';
import './App.css';
import Form from './components/form.js'
import TodoList from './components/todolist.js';

function App() {

  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem('tasks')) || []
  });; //getting data from local storage into initial state to avoid having another initial state when the app reloads,
  const [status, setStatus] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState([]);

  let completed_tasks = tasks.filter(x => x.completed === true).length;
  let percentage = (completed_tasks/tasks.length) * 100;
  console.log(completed_tasks);
  
  useEffect( () => {
    filterHandler();
    saveLocal();
   }, 
   [tasks, status]
  );

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
 
  //Save the tasks to local storage
  const saveLocal = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }


  return (
    <div className="App bg-slate-900 top-0 m-0 grid justify-items-center">
      <section className='shadow-[0px_0px_8px_3px_#2D3748] card flex justify-around align-center md:items-center flex-col md:flex-row md:p-[5%] h-[100vh] md:h-[90vh] w-[98%] md:w-[98%] pt-[2%]'>
        <div className='relative md:w-[50%]'>
            <Form 
              todos = {tasks} 
              setTodos = {setTasks} 
              inputText = {inputText} 
              setInputText = {setInputText}
              status = {status}
              setStatus = {setStatus}
              filter = {false}
              top={true} />
            
            <p>
              Tasks should be <span title='S.M.A.R.T - Specific Measurable Achievable Realistic Timely'>SMART</span>
            </p>
        </div>
        <div className='md:w-[50%] md:flex md:flex-col md:justify-center'>
          <div className='grid items-center w-[50%]'>
            <Circle percent={percentage} strokeWidth="4" strokeColor="blue" />
          </div>
          <div className='grid items-center'>
            <p className='text-white'>
              {"Your tasks are " + percentage + "% complete."}
            </p>
          </div>
        </div>
      </section>
    
      <section className='w-[95%] flex flex-col pt-[4%] pb-[5%]'>
        <div className='h-auto'>
          <Form 
              todos = {tasks} 
              setTodos = {setTasks} 
              inputText = {inputText} 
              setInputText = {setInputText}
              status = {status}
              setStatus = {setStatus}
              filter = {true} />
        </div>
        <div className='p-[5%] w-[100%]'>
          <hr />
        </div>
        <div>
        <TodoList todos = {tasks} 
              setTodos = {setTasks}
              filteredTodos = {filteredTasks} />
        </div>
      </section>
    </div>
  );
}

export default App;
