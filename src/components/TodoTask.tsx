import React from "react";
import { ITask } from "../Interfaces";
interface TodoTaskProps {
  task: ITask;
  handleComplete(completedTaskName: string): void;
}
const TodoTask = ({ task, handleComplete }: TodoTaskProps) => {
  return (
    <div>
      {task.taskName}---{task.deadline}
      <button
        onClick={() => {
          handleComplete(task.taskName);
        }}
      >
        X
      </button>
    </div>
  );
};
export default TodoTask;
