"use client";

import {FormEvent, useState} from "react";
import {v4 as uuidv4} from "uuid";
import useTaskStore, {Task} from "@/app/store/taskStore";
import {Box, Button, TextField} from "@mui/material";

export default function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState<"High" | "Medium" | "Low">("Medium");
    const addTask = useTaskStore((state) => state.addTask);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (title.trim() === "") return;
        addTask({
            id: uuidv4(),
            title,
            description,
            completed: false,
            priority,
            createdAt: new Date().toISOString(),
        });
        setTitle("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 flex flex-col gap-4">
            <TextField
                name={'title'}
                label={"Task Title"}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full mb-2 p-2 border rounded"
            />
            <TextField
                name={'description'}
                label={"Task Description"}
                multiline
                minRows={6}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full mb-2 p-2 border rounded"
            />
            <Box className="flex justify-between items-center">
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value as any)}
                    className="p-2 border rounded"
                >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <Button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add Task
                </Button>
            </Box>
        </form>
    );
}
