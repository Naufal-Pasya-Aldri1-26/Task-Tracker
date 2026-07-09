

function TaskItem({
  id,
  description,
  completed,
  toggleTask,
  deleteTask,
  saveEdit,
  editing,
  startEditing,
  finishEditing,
  escapeEditing,
  editingText,
  changeEditingText
}) {

  return (
    <div
      className={`task-item ${completed ? "task-item--done" : ""}`}
    >

      <button
        className="task-item__toggle"
        onClick={() => toggleTask(id)}
      >
        {completed ? "☑" : "☐"}
      </button>

      {editing ? 
      <form onSubmit={(event) => {
        event.preventDefault() 
        finishEditing(id, editingText)
        onBlur=() => finishEditing(id, editingText)}}
       >
      <input
        autoFocus
        value={editingText}
        onChange={(event) => changeEditingText(event.target.value)}
        onKeyDown={(e) => ['Escape'].includes(e.key) && escapeEditing()}>  
        </input>
        </form> : 
      
      <span
        className="task-item__text"
        onDoubleClick={() => startEditing(id, description)}
      >
        {description}
      </span>}


      <button
        className="task-item__delete"
        onClick={() => deleteTask(id)}
      >
        Delete
      </button>

    </div>
  );
}

export default TaskItem;