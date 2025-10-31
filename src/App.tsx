import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import EditTodoForm from './components/EditTodo';
import TodoHeadingComponent from './components/TodoHeading'

import './App.css';
import { type todo } from './utils/types';

function App() {
  const [todos, setTodos] = useState<todo[]>([]);

  return (
    <div>
      <TodoHeadingComponent />
      <div className='px-4'>
        <Routes>
            <Route path='/' element={<TodoList todos={todos} setTodos={setTodos}/>} />
            <Route path='/addTodo' element={<AddTodoForm setTodos={setTodos}/>} />
            <Route path='/editTodo/:_id' element={<EditTodoForm todos={todos} setTodos={setTodos}/>} />
            <Route path="*" element={<>Not Found : 404</>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
