"use client";

import React from "react";
import useTaskStore, { Task } from "@/app/store/taskStore";
import { Box, Button, Typography } from "@mui/material";
import dayjs from "dayjs";

export default function TaskList() {
    const { tasks } = useTaskStore();

    // Filter out tasks with past due dates
    const currentDate = dayjs().startOf("day");
    const filteredTasks = tasks.filter((task) => {
        if (!task.dueDate) return true; // Include tasks without a due date
        return dayjs(task.dueDate).isSameOrAfter(currentDate);
    });

    // Sort tasks by due date in ascending order
    const sortedTasks = filteredTasks.sort((a, b) => {
        if (!a.dueDate) return 1; // Push tasks without a due date to the end
        if (!b.dueDate) return -1;
        return dayjs(a.dueDate).isBefore(dayjs(b.dueDate)) ? -1 : 1;
    });

    return (
        <Box>
            {sortedTasks.length > 0 ? (
                <ul className="space-y-2 p-0 task-list">
                    {sortedTasks.map((task) => (
                        <li
                            key={task.id}
                            className={`flex items-center justify-between gap-2 p-4 border-solid border-2 border-primary rounded hover:bg-secondary-10 list ${
                                task.completed ? "completed bg-success-10" : "bg-white"
                            }`}
                        >
                            <Box className="w-full flex justify-between items-center">
                                <Box>
                                    <Typography component="h3" variant="lg_bold">
                                        {task.title}
                                    </Typography>
                                    <Typography variant="sm_regular" color="secondary.A60">
                                        {task.description}
                                    </Typography>
                                    {task.dueDate && (
                                        <Typography
                                            variant="sm_regular"
                                            color="secondary.A80"
                                            className="due-date"
                                        >
                                            Due: {dayjs(task.dueDate).format("YYYY-MM-DD")}
                                        </Typography>
                                    )}
                                </Box>
                                <Box className="flex gap-4">
                                    <Button
                                        color="primary"
                                        size="small"
                                        onClick={() => useTaskStore.getState().toggleComplete(task.id)}
                                    >
                                        {task.completed ? "Undo" : "Complete"}
                                    </Button>
                                    <Button
                                        color="warning"
                                        size="small"
                                        onClick={() => console.log("Edit Task")}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        color="error"
                                        size="small"
                                        onClick={() => useTaskStore.getState().deleteTask(task.id)}
                                    >
                                        Delete
                                    </Button>
                                </Box>
                            </Box>
                        </li>
                    ))}
                </ul>
            ) : (
                <Typography variant="h6" color="secondary.A60" align="center">
                    No tasks available or all tasks are past due.
                </Typography>
            )}
        </Box>
    );
}
