import React, { useState } from "react";
import { ITodo } from "./types";
import FormToDo from "./FormTodo/FormTodo";
import ToDo from "./Todo/Todo";

const Todos = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (event: React.FormEvent<HTMLFormElement>, title: string) => {
    event.preventDefault();
    const todo: ITodo = {
      id: Date.now(),
      title: title,
      complete: false,
    };
    setTodos((prev: ITodo[]) => [...prev, todo]);
  };

  const onComplete = (id: number, complete: boolean) => {
    const updateTodos: ITodo[] = [...todos].map((todo: ITodo) => {
      if (todo.id === id) {
        todo.complete = complete;
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  const onDelete = (id: number) => {
    const updateTodos: ITodo[] = [...todos].filter((todo: ITodo) => {
      return todo.id !== id;
    });
    setTodos(updateTodos);
  };

  return (
    <div>
      <h1 className="text-center mt-[30px] text-[53px] font-[900]">Todos</h1>
      <FormToDo addTodo={addTodo} />

      {todos.map((todo: ITodo) => {
        return (
          <ToDo
            key={todo.id}
            todo={todo}
            onComplete={(complete) => {
              onComplete(todo.id, complete);
            }}
            onDelete={() => {
              onDelete(todo.id);
            }}
          />
        );
      })}
    </div>
  );
};

export default Todos;
