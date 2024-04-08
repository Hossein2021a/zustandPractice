"use client";

import Colmn from "./colmn";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useTaskStore } from "@/app/store/taskStore";

function Columns() {
  const addTask = useTaskStore((state) => state.addTask);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const newForm = new FormData(form)
    const { title, describtion } = Object.fromEntries(newForm);
    if (typeof title !== "string" || typeof describtion !== "string") return;
    addTask(title,describtion);
  };
  return (
    <div className="max-w-6xl w-full min-h-screen mx-auto h-full flex flex-col justify-center">
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="my-4" variant="outline">
              + Add Todo
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add ToDo</DialogTitle>
            </DialogHeader>
            <form className=" space-y-6" onSubmit={handleSubmit}>
              <Input name="title" />
              <Textarea name="describtion" />
              <DialogClose asChild>
                <Button type="submit">Send ToDo</Button>
              </DialogClose>{" "}
            </form>

            <DialogFooter className="sm:justify-start"></DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 py-8 lg:py-0 md:grid-cols-2 grid-cols-1">
        <Colmn title="Todo" status="Todo" />
        <Colmn title="In_Progress" status="In_Progress" />
        <Colmn title="Done" status="Done" />
      </div>
    </div>
  );
}

export default Columns;
