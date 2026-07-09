import { useState } from 'react';
import TaskItem from './TaskItem';

function TaskList({
  tasks,
  filter,
  toggleTask,
  deleteTask,
  saveEdit,
  activateWarning
}) {

  let visibleTasks;

  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  function startEditing(id, description) {
    setEditingText(description);
    setEditingId(id);
  }

  function changeEditingText(text) {
    setEditingText(text);
  }

  function finishEditing(id, newDescription) {
    const text = newDescription.trim();

    if (text) {
      saveEdit(id, newDescription);
      setEditingId(null);
    } else {
      activateWarning();
    }
  }

  function escapeEditing() {
    setEditingId(null);
  }

  if(filter === "all"){
    visibleTasks = tasks;
  } else if(filter === "completed"){
    visibleTasks = tasks.filter(task => task.completed);
  } else if(filter === "active") {
    visibleTasks = tasks.filter(task => !task.completed);
  } else {
    visibleTasks = tasks;
    console.log("Invalid filter");
  }
  
  const sortedTasks = [...visibleTasks].sort((a, b) => {
    if (a.completed === b.completed) {
      return 0;
    }

    return a.completed ? 1 : -1;
  });

  if (sortedTasks.length === 0) {
      return (
        <p className="empty-state">
          you have no tasks
        </p>
      );
    };

  return (
      <div className="task-list">

      {sortedTasks.map(task => (

        <TaskItem
          key={task.id}
          id={task.id}
          description={task.description}
          completed={task.completed}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          saveEdit={saveEdit}
          editing={task.id ===  editingId}
          startEditing={startEditing}
          finishEditing={finishEditing}
          escapeEditing={escapeEditing}
          editingText={editingText}
          changeEditingText={changeEditingText}
        />

      ))}

    </div>
  )
};


export default TaskList;