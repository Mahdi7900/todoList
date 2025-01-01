"use client";


import useTaskStore from "@/app/store/taskStore";

export default function Filter() {
    const { setFilter, setSort } = useTaskStore();

    return (
        <div className="flex justify-between mb-4">
            <select
                onChange={(e) => setFilter(e.target.value as any)}
                className="p-2 border rounded"
            >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="incomplete">Incomplete</option>
            </select>
            <select
                onChange={(e) => setSort(e.target.value as any)}
                className="p-2 border rounded"
            >
                <option value="createdAt">Sort by Created</option>
                <option value="priority">Sort by Priority</option>
                <option value="dueDate">Sort by Due Date</option>
            </select>
        </div>
    );
}