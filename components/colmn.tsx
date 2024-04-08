"use client";
import React, { useMemo } from "react";
import Task from "./task";
import { useTaskStore } from "@/app/store/taskStore";

function Colmn({ title, status }: { title: string; status: string }) {
  const tasks = useTaskStore((state) => state.tasks);
  const draggedItem = useTaskStore((state) => state.draggedItem);

  const filtredTask = useMemo(
    () => tasks.filter((task) => task.status == status),
    [tasks, status]
  );

  const updateitem = useTaskStore((state) => state.updateTask);

  const handleDrope = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!draggedItem) return;
    updateitem(status, draggedItem);
  };

  return (
    <div>
      <div className="py-2">
        <h1 className=" text-white font-semibold">{title}</h1>
      </div>
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrope}
        className=" bg-gray-600 h-[350px] rounded-md"
      >
        {filtredTask.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </div>
    </div>
  );
}

export default Colmn;
