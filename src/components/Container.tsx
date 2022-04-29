import React, { ChangeEvent, useState } from "react";
import { ITask } from "../Interfaces";
import Button from "./Button";
import TodoList from "./TodoList";
import TodoTask from "./TodoTask";

const Container = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  }
  const addTask = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ): void => {
    e.preventDefault();
    const newTask = {
      taskName: task,
      deadline: deadline,
    };
    setTodoList([...todoList, newTask]);
    console.log(todoList);
    setTask("");
    setDeadline(0);
  };
  const taskComplete = (completedTaskName: string): void => {
    const tasksPending = todoList.filter((task) => {
      return task.taskName !== completedTaskName;
    });
    setTodoList(tasksPending);
  };
  return (
    <>
      <div className="input-box">
        <input
          type="text"
          placeholder="Task..."
          name="task"
          value={task}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Number of Days.."
          name="deadline"
          value={deadline}
          onChange={handleChange}
        />
        <Button handleClick={addTask} />
      </div>
      <div>
        <h3>Todo list</h3>
        {todoList.map((task: ITask, key: number) => {
          return (
            <div className="todo-list">
              <TodoTask task={task} handleComplete={taskComplete} key={key} />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Container;
