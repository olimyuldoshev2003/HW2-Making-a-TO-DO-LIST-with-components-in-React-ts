import React from "react";
import { ITodoProps } from "../types";

const ToDo = ({ todo, onComplete, onDelete }: ITodoProps) => {
  return (
    <div className="flex justify-center gap-[30px] mt-[20px]">
      <input
        type="checkbox"
        name=""
        id=""
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          onComplete(event.target.checked);
        }}
      />
      <span>{todo.complete ? <s>{todo.title}</s> : todo.title}</span>
      <button
        onClick={onDelete}
        className="p-[3px_20px] bg-[#080c3d] rounded-[40px] text-[#fff]"
      >
        Delete
      </button>
    </div>
  );
};

export default ToDo;
