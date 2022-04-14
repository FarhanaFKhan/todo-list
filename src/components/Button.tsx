import React from "react";
interface ClickProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = (Props: ClickProps) => {
  return <button onClick={Props.handleClick}>Add Task</button>;
};
export default Button;
