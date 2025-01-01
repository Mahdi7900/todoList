"use client";


import useTaskStore from "@/app/store/taskStore";

export default function TaskList() {
    const { tasks, toggleComplete, deleteTask, filter, sort } = useTaskStore();
    const filteredTasks = tasks.filter((task) => {
        if (filter === "completed") return task.completed;
        if (filter === "incomplete") return !task.completed;
        return true;
    });

    const sortedTasks = [...filteredTasks].sort((a, b) => {
        if (sort === "priority") return a.priority.localeCompare(b.priority);
        if (sort === "dueDate") return new Date(a.dueDate!).getTime() - new Date(b.dueDate!).getTime();
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    });

    return (
        <ul className="space-y-2">
            {sortedTasks.map((task) => (
                <li
                    key={task.id}
                    className={`p-4 border rounded ${
                        task.completed ? "bg-green-100" : "bg-white"
                    }`}
                >
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-bold">{task.title}</h3>
                            <p className="text-sm text-gray-600">{task.description}</p>
                        </div>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => toggleComplete(task.id)}
                                className="text-blue-500"
                            >
                                {task.completed ? "Undo" : "Complete"}
                            </button>
                            <button
                                onClick={() => deleteTask(task.id)}
                                className="text-red-500"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}
