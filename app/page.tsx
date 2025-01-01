import TaskForm from "@/app/components/TaskForm";
import Filter from "@/app/components/Filters";
import TaskList from "@/app/components/TaskList";
import {Box, Typography} from "@mui/material";

export default function Home() {
    return (
        <Box className="min-h-screen bg-gray-100 dark:bg-gray-800 p-4">
            <Box className="max-w-3xl mx-auto">
                <Typography component={'h1'} className="text-3xl font-bold mb-6 text-center">To-Do List</Typography>
                <TaskForm/>
                <Filter/>
                <TaskList/>
            </Box>
        </Box>
    );
}
