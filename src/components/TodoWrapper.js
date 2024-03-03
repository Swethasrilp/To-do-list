import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './TodoForm';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';

export const TodoWrapper = () => {
  // Using useState hook to initialize state
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // Using the callback form of setTodos to avoid potential issues with stale state
    setTodos(prevTodos => [
      ...prevTodos, // spreading previous todos
      { id: uuidv4(), task: todo, completed: false, isEditing: false }, // adding new todo
    ]);
    console.log(todos);
  };
  const deleteTodo=id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const toggleComplete=id =>setTodos(todos.mao(todo => todo.id ===id ? {
    ...todo,completed:!todo.completed} :todo))
  const editTodo =id =>{
    setTodos(todos.map(todo => todo.id === id ?{...todo,isEditing:!todo.isEditing}:todo))
  }
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  return (
    <div className='TodoWrapper'>
      <h1>Task Master </h1>
    <TodoForm addTodo={addTodo}/>
      {todos.map((todo,index) => (
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo}/>
        ):(
        <Todo task={todo} key={index }
        toggleComplete={toggleComplete} 
        deleteTodo ={deleteTodo}
        editTodo={editTodo}/>
        )
      ))}
    </div>
  )
}

export default TodoWrapper
 