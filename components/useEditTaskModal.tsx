'use client';

import {useState} from "react";
import useTaskStore, {Task} from "@/app/store/taskStore";
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    FormControl,
    MenuItem,
    Select,
    TextField,
    Typography
} from "@mui/material";

export default function useEditTaskModal() {
    const {editTask} = useTaskStore();
    const [task, setTask] = useState<Task | undefined>();
    const [open, setOpen] = useState<boolean>(false);
    const [title, setTitle] = useState<string>(task?.title ?? '');
    const [description, setDescription] = useState<string>(task?.description ?? '');
    const [priority, setPriority] = useState<"Low" | "Medium" | "High">(task?.priority ?? 'Medium');

    const openModal = (task: Task) => {
        setTask(task);
        setTitle(task.title);
        setDescription(task.description);
        setPriority(task.priority);
        setOpen(true);
    }
    const closeModal = () => {
        setOpen(false);
        setTask(undefined);
    }

    const handleSave = () => {
        if (!!task)
            editTask(task.id, {
                id: task.id,
                title,
                description,
                priority,
                completed: task.completed,
                createdAt: task.createdAt,
                dueDate: task.dueDate
            });
        closeModal();
    };

    const EditTaskModal = () => (
        <Dialog open={open} onClose={closeModal}>
            <Typography color={'primary.main'} variant={'3xl_bold'} align={'center'} compontent={'h2'}
                        className="!my-4">
                Edit Task
            </Typography>
            <DialogContent>
                <TextField
                    name={'title'}
                    label={"Task Title"}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full !my-2 p-2 border rounded"
                />
                <TextField
                    name={'description'}
                    label={"Task Description"}
                    multiline
                    minRows={6}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full !my-2 p-2 border rounded"
                />
                <FormControl fullWidth>
                    <Select
                        label={'priority'}
                        value={priority}
                        className={'!my-2'}
                        onChange={(e) => setPriority(e.target.value as any)}
                        fullWidth>
                        <MenuItem value="High">High</MenuItem>
                        <MenuItem value="Medium">Medium</MenuItem>
                        <MenuItem value="Low">Low</MenuItem>
                    </Select>
                </FormControl>
                <Box className="flex justify-end space-x-2">
                    <Button variant={'outlined'} color={'secondary'} onClick={closeModal}>
                        Cancel
                    </Button>
                    <Button onClick={handleSave}>
                        Save
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
    return {openModal, EditTaskModal}
}
