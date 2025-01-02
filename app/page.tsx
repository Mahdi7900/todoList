'use client'

import TaskForm from "@/components/TaskForm";
import Filter from "@/components/Filters";
import TaskList from "@/components/TaskList";
import {Box, Divider, Typography} from "@mui/material";
import {ThemeChanger} from "@/components/ThemeChanger";
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
                    <Divider className={'!my-2'}/>
                    <Filter/>
                    <Divider className={'!my-2'}/>
                    <TaskList/>
                </Box>
            </Box>
        </ThemeState>
    );
}
