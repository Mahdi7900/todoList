"use client";


import useTaskStore from "@/app/store/taskStore";
import {Box, Button, Typography} from "@mui/material";
import useEditTaskModal from "@/components/useEditTaskModal";

export default function TaskList() {
    const {tasks, toggleComplete, deleteTask, filter, sort} = useTaskStore();
    const {EditTaskModal, openModal} = useEditTaskModal();

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
        <Box>
            <ul className="space-y-2 p-0">
                {sortedTasks.map((task) => (
                    <li
                        key={task.id}
                        className={`flex items-center justify-between gap-2 p-4 border-solid border-2 border-primary rounded hover:bg-secondary-10 list ${
                            task.completed ? "completed bg-success-10" : "bg-white"
                        }`}>
                        <Box className="w-full flex justify-between items-center">
                            <Box>
                                <Typography component={'h3'} variant={'lg_bold'}>{task.title}</Typography>
                                <Typography variant={'sm_regular'}
                                            color={'secondary.A60'}>{task.description}</Typography>
                            </Box>
                            <Box className="flex gap-4">
                                <Button
                                    color={'primary'}
                                    size={'small'}
                                    onClick={() => toggleComplete(task.id)}>
                                    {task.completed ? "Undo" : "Complete"}
                                </Button>
                                <Button
                                    color={'warning'}
                                    size={'small'}
                                    onClick={() => openModal(task)}>
                                    Edit
                                </Button>
                                <Button
                                    color={'error'}
                                    size={'small'}
                                    onClick={() => deleteTask(task.id)}>
                                    Delete
                                </Button>
                            </Box>
                        </Box>
                    </li>
                ))}
            </ul>
            <EditTaskModal/>
        </Box>
    );
}
