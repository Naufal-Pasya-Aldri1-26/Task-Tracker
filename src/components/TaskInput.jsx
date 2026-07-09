import { useState } from "react";

function TaskInput({ addTask }) {

  const [input, setInput] = useState("");

  function handleSubmit(event) {

    event.preventDefault();

    const text = input.trim();

    if (!text) return;

    addTask(text);

    setInput("");

  }

  return (
    <form
      className="task-input"
      onSubmit={handleSubmit}
    >

      <input
        className="task-input__field"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Add a new task..."
      />

      <button
        className="task-input__button"
        type="submit"
      >
        Add
      </button>

    </form>
  );
}

export default TaskInput;