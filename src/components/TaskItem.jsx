function TaskItem({ id, description, completed, toggleTask, deleteTask }) {
  return (
    <div className={`task-item ${completed ? "task-item--done" : ""}`}>
      <button className="task-item__toggle" onClick={() => toggleTask(id)}>
        {completed ? "☑" : "☐"}
      </button>

      <span className="task-item__text" onClick={() => toggleTask(id)}>
        {description}
      </span>

      <button className="task-item__delete" onClick={() => deleteTask(id)}>
        Delete
      </button>
    </div>
  );
}

export default TaskItem;