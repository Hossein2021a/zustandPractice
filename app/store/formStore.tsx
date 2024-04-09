import { create } from "zustand";
import { persist } from "zustand/middleware";
type state = {
  formname: string | null;
  formage: number | null;
};

type action = {
  saveForm: (name: string, age: number) => void;
};

export const useFormStore = create<state & action>()(

  persist(
    (set) => ({
      formname: null,
      formage: null,
      saveForm: (name: string, age: number) =>
        set({ formname: name, formage: age }),
    }),
    { name: "task" }
  )
);


