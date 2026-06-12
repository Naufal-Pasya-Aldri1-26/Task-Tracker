import TaskItem from './TaskItem';

function TaskList({ tasks, toggleTask, deleteTask }) {

    const sortedTasks = [...tasks].sort((a, b) => {

    if (a.completed === b.completed) {
        return 0
    }

    return a.completed ? 1 : -1
    })

    return (
        <div>
            {sortedTasks.map( task => (
                <TaskItem
                    key={task.id}
                    id={task.id}
                    description = {task.description}
                    completed = {task.completed}
                    toggleTask={toggleTask}
                    deleteTask={deleteTask}
                />
            ))}

        </div>
    )
}

export default TaskList 