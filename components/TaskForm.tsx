"use client";

import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import useTaskStore from "@/app/store/taskStore";
import {Box, Button, FormControl, MenuItem, Select, TextField} from "@mui/material";
import {Form} from "@/components/Form";

export default function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState<"High" | "Medium" | "Low">("Medium");
    const addTask = useTaskStore((state) => state.addTask);

    const handleSubmit = () => {
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
        <Form onSubmit={handleSubmit} className={"mb-4 flex flex-col gap-4"}>
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
            <Box className="grid grid-cols-3 gap-4 justify-items-end">
                <FormControl fullWidth>
                    <Select
                        label={'priority'}
                        value={priority}
                        onChange={(e) => setPriority(e.target.value as any)}
                        fullWidth>
                        <MenuItem value="High">High</MenuItem>
                        <MenuItem value="Medium">Medium</MenuItem>
                        <MenuItem value="Low">Low</MenuItem>
                    </Select>
                </FormControl>
                <Button type="submit" className={'col-span-2'}>
                    Add Task
                </Button>
            </Box>
        </Form>
    );
}
