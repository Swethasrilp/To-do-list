import React ,{useState}from 'react'

const EditTodoForm = ({editTodo,task}) => {
    const[value,setValue] = useState(task.task)
    const handleSubmit = e => {
        e.preventDefault();
        if(value){
        editTodo(value,task.id);
        setValue('');
        }
    };
  return (
    <div>
      <form className='Tododform' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='update task' onChange={(e) => setValue(e.target.value) }/>
        <button type='submit' className='todo-btn'>Update Task</button>
      </form>
    </div>
  )
}

export default EditTodoForm

