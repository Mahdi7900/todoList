'use client'

import TaskForm from "@/app/components/TaskForm";
import Filter from "@/app/components/Filters";
import TaskList from "@/app/components/TaskList";
import {Box, Typography} from "@mui/material";
import {ThemeChanger} from "@/app/components/ThemeChanger";
import {ThemeState, useThemeStore} from "@/theme";
import muiTheme from "@/styles/muiTheme";

export default function Home() {
    const {theme} = useThemeStore();

    return (
        <ThemeState defaultThemeMode={theme} theme={muiTheme}>
            <Box className="min-h-screen p-4">
                <ThemeChanger/>
                <Box className="max-w-3xl mx-auto">
                    <Typography component={'h1'} color={'primary.main'} variant={'3xl_bold'}
                                className="!mb-6 text-center">
                        To-Do List
                    </Typography>
                    <TaskForm/>
                    <Filter/>
                    <TaskList/>
                </Box>
            </Box>
        </ThemeState>
    );
}
