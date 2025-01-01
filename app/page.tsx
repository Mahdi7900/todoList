import TaskForm from "@/app/components/TaskForm";
import Filter from "@/app/components/Filters";
import TaskList from "@/app/components/TaskList";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-4">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center">To-Do List</h1>
                <TaskForm/>
                <Filter/>
                <TaskList/>
            </div>
        </div>
    );
}
