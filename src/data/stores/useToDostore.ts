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
    tasks: [],
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
    updateTask: (title, id) => {},
    removeTask: (id) => {}
}))