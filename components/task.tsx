"use client";

import { useTaskStore } from "@/app/store/taskStore";
import { cn } from "@/lib/utils";
import React from "react";
import { PiTrashThin } from "react-icons/pi";

export type TaskProp = {
  id: string;
  title: string;
  status: string;
  describtion: string;
};

function Task(task: TaskProp) {
  const deleteTask = useTaskStore((state) => state.removeTask);
  const dragItem = useTaskStore((state)=>state.dragItem)

  return (
    <div  className="w-full inline-block cursor-move">
      <div
        className={cn(
          "max-w-[90%] mt-4 px-4 py-2 rounded-md mx-auto bg-white",
          { "border-green-500 border-2": task.status == "Todo" },
          { "border-red-500 border-2": task.status == "In_Progress" },
          { "border-blue-500 border-2": task.status == "Done" }
        )}

        draggable
        onDrag={() => dragItem(task.id)}
      >
        <div className="flex items-center justify-between">
          <span className="text-gray-900 text-[15px]">{task.title}</span>

          <PiTrashThin
            onClick={() => deleteTask(task.id)}
            className=" hover:text-rose-500 transition-all cursor-pointer text-[20px] "
          />
        </div>

        <div className="py-1">
          <span className="text-gray-600 text-[14px]">{task.describtion}</span>
        </div>
      </div>
    </div>
  );
}

export default Task;
