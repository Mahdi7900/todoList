"use client";


import useTaskStore from "@/app/store/taskStore";
import {Box, FormControl, MenuItem, Select} from "@mui/material";

export default function Filter() {
    const {setFilter, filter, sort, setSort} = useTaskStore();

    return (
        <Box className="grid grid-cols-3 mb-4">
            <FormControl fullWidth>
                <Select
                    name={'filter'}
                    label={'filter'}
                    value={filter}
                    onChange={(e) => setFilter(e.target.value as any)}>
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="completed">Completed</MenuItem>
                    <MenuItem value="incomplete">Incomplete</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth className={"col-start-3"}>
                <Select
                    name={'sort'}
                    label={'sort'}
                    value={sort}
                    onChange={(e) => setSort(e.target.value as any)}>
                    <MenuItem value="createdAt">Sort by Created</MenuItem>
                    <MenuItem value="priority">Sort by Priority</MenuItem>
                    <MenuItem value="dueDate">Sort by Due Date</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}