import { create } from "zustand";

export type Task = {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    priority: "High" | "Medium" | "Low";
    dueDate?: string;
    createdAt: string;
};

type TaskStore = {
    tasks: Task[];
    addTask: (task: Task) => void;
    deleteTask: (id: string) => void;
    toggleComplete: (id: string) => void;
    filter: "all" | "completed" | "incomplete";
    setFilter: (filter: "all" | "completed" | "incomplete") => void;
    sort: "priority" | "dueDate" | "createdAt";
    setSort: (sort: "priority" | "dueDate" | "createdAt") => void;
    undo: () => void;
    redo: () => void;
};

const useTaskStore = create<TaskStore>((set, get) => {
    let history: Task[][] = [];
    let redoStack: Task[][] = [];

    const saveState = () => {
        history.push([...get().tasks]);
        redoStack = []; // Clear redo stack on new action
    };

    return {
        tasks: [],
        addTask: (task) => {
            saveState();
            set((state) => ({ tasks: [...state.tasks, task] }));
        },
        deleteTask: (id) => {
            saveState();
            set((state) => ({
                tasks: state.tasks.filter((task) => task.id !== id),
            }));
        },
        toggleComplete: (id) => {
            saveState();
            set((state) => ({
                tasks: state.tasks.map((task) =>
                    task.id === id ? { ...task, completed: !task.completed } : task
                ),
            }));
        },
        filter: "all",
        setFilter: (filter) => set(() => ({ filter })),
        sort: "createdAt",
        setSort: (sort) => set(() => ({ sort })),
        undo: () => {
            if (history.length > 0) {
                redoStack.push([...get().tasks]);
                set(() => ({ tasks: history.pop()! }));
            }
        },
        redo: () => {
            if (redoStack.length > 0) {
                history.push([...get().tasks]);
                set(() => ({ tasks: redoStack.pop()! }));
            }
        },
    };
});

export default useTaskStore;
