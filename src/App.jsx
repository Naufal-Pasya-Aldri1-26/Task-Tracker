import { useState } from 'react';
import './App.css'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList';



function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Learn React",
      completed: false
    },
    {
      id: 2,
      description: "Buy milk",
      completed: true
    }
  ])

  function toggleTask(id) {
    setTasks(
      tasks.map(task => {
      if (task.id === id) {
      return {
        ...task,
         completed: !task.completed
      }
    }
      return task
    })
  )
  }

  function addTask(description) {
    const newTask = {
      id: Date.now(),
      description: description,
      completed: false
    } 

    setTasks([...tasks, newTask])
  }

  function deleteTask(id) {

    setTasks(
      tasks.filter(task => task.id !== id)
    )
  }

  return (
    <>
      <h1>
        Task Tracker
      </h1>

      <TaskInput addTask={addTask}/>

      <TaskList 
       tasks={tasks}
       toggleTask={toggleTask}
       deleteTask={deleteTask}
      />
    </>
  )
}




export default App