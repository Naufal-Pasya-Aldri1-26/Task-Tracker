import { useState, useEffect } from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';
import ClearCompletedButton from './components/ClearCompletedButton';

function App() {

    
  const [showWarning, setShowWarning] = useState(false);

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      return JSON.parse(savedTasks);
    }

    return [
      {
        id: 1,
        description: "Learn React",
        completed: false
      },
      {
        id: 2,
        description: "Buy milk",
        completed: false
      }
    ];
  });

  // use effect
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(description) {

    const newTask = {
      id: Date.now(),
      description: description,
      completed: false
    };

    setTasks(prev => [...prev, newTask]);

  }

  const [filter, setFilter] = useState("all");

  function toggleTask(id) {

    setTasks(
      tasks.map(task => {

        if (task.id === id) {

          return {
            ...task,
            completed: !task.completed
          };

        }

        return task;

      })
    );

  }

  function deleteTask(id) {

    setTasks(
      tasks.filter(task => task.id !== id)
    );

  }

  function saveEdit(id, newDescription) {

    setShowWarning(false);

    setTasks(
      tasks.map(task => {

        if (task.id === id) {

          return {
            ...task,
            description: newDescription
          };

        }

        return task;

      })
    )
    
    
  }

  function clearCompleted() {
    setTasks(
      tasks.filter(task => !task.completed)
    );
  }

  function activateWarning() {
    setShowWarning(true);
  }

  const remainingCount = tasks.filter(task => !task.completed).length;

  return (
    <div className="app">
      <div className="card">

        <h1 className="title">
          Task Tracker
        </h1>

        <TaskInput addTask={addTask} />

        <FilterBar
            filter={filter}
            setFilter={setFilter}
        />

        <ClearCompletedButton
        clearCompleted={clearCompleted} />
        

        {tasks.length > 0 && <p className="task-counter">
          {remainingCount} task{remainingCount !== 1 ? "s" : ""} remaining
        </p>}

        <TaskList
          tasks={tasks}
          filter={filter}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          saveEdit={saveEdit}
          activateWarning={activateWarning}
        />

      </div>
      {showWarning && (
        <p>
          Task cannot be empty.
        </p>
      )}
    </div>
  );
}

export default App;