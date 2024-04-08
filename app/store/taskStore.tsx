import { create } from "zustand";
import { TaskProp } from "@/components/task";
import { v4 as uuidv4 } from "uuid";
import { persist } from "zustand/middleware";

type state = {
  tasks: TaskProp[];
  draggedItem: string | null;
};

type action = {
  addTask: (title: string, describtion: string) => void;
  removeTask: (id: string) => void;
  updateTask: (status: string, id: string) => void;
  dragItem: (id: string) => void;
};

export const useTaskStore = create<state & action>()(
  persist(
    (set) => ({
      tasks: [],
      draggedItem: null,
      addTask: (title: string, describtion: string) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            { id: uuidv4(), title, describtion, status: "Todo" },
          ],
        })),
      dragItem: (id: string) => set({ draggedItem: id }),
      removeTask: (id: string) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
      updateTask: (status: string, id: string) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id == id ? { ...task, status } : task
          ),
        })),
    }),
    { name: "task-store" }
  )
);
