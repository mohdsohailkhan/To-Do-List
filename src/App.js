import { useState } from 'react';
import './App.css';
import InputField from './components/InputField'
import TodoList from './components/TodoList';

function App() {
  const [todos ,  setTodos] = useState([])
  const addNewTodo = (newTodo) =>{
    setTodos([...todos , newTodo]);
  }
  const deleteTodo = (itemTobeDeleted)=>{
    const filteredTodod = todos.filter((item)=>item!=itemTobeDeleted);
    setTodos(filteredTodod);
  }
  return (
    <div className='main'>
      <h1 className='heading'>TO DO LIST</h1>
      <div>
        <h2 style={{marginLeft:'40rem',color:'white'}}>Pending Items Count - {todos.length}</h2>
      </div>
      <InputField addNewTodo={addNewTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
