import { useState } from "react";

function TaskInput({ addTask }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    addTask(text);
    setInput("");
  }

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input
        className="task-input__field"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
      />
      <button className="task-input__button" type="submit">
        Add
      </button>
    </form>
  );
}

export default TaskInput;