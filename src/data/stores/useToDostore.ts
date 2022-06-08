import create from "zustand";
import { generateId } from "../helpers"

interface Task {
    id: string;
    title: string;
    createdAt: number;
}

interface ToDoStore {
    tasks: Task[];
    createTask: (title: string) => void;
    updateTask: (title: string, id: string) => void;
    removeTask: (id: string) => void;
}

export const useToDoStore = create<ToDoStore>((set, get) => ({
    tasks: [
        {
            id: 'ADFAFF',
            title: 'Task 1',
            createdAt: 132324
        },
        {
            id: 'ADFAffFF',
            title: 'Task 2',
            createdAt: 32324
        }
    ],
    createTask: (title) => {
        const { tasks } = get()
        const newTasks = {
            id: generateId(),
            title,
            createdAt: Date.now(),
        }

        set({
            tasks: [newTasks].concat(tasks)
        })
    },
    updateTask: (id: string, title: string) => {
        const { tasks } = get();
        set({
            tasks: tasks.map((task) => ({
                ...task,
                title: task.id === id ? title : task.title,
            }))
        });
    },
    removeTask: (id: string) => {
        const { tasks } = get();
        set({
            tasks: tasks.filter((task) => task.id !== id)
        })
    }
}))