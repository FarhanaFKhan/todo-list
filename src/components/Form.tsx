import React, { ChangeEvent, FC, useState } from "react";
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

const InputForm: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  //const [todoList, setTodoList] = useState<ITask[]>([]);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  }

  function onSubmit() {
    alert("Hello");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel color="white" htmlFor="task">
        Task
      </FormLabel>
      <Input
        color="white"
        id="task"
        placeholder="task"
        {...register("task", {
          required: "This is required",
          minLength: { value: 4, message: "Minimum length should be 4" },
        })}
      />
      <FormLabel color="white" htmlFor="days">
        Number of Days
      </FormLabel>
      <NumberInput id="deadline" color="white" defaultValue={0} max={30}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <FormErrorMessage>{errors.task && errors.name.message}</FormErrorMessage>

      <Button mt={4} color="black" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default InputForm;
