import React, { useState } from 'react'
import { IFormTodo } from '../types';

const FormToDo = ({addTodo}:IFormTodo) => {
    const [title, setTitle] = useState<string>("") 
    return (
        <div className='flex justify-center'>
            <form onSubmit={(event: React.ChangeEvent<HTMLFormElement>) => {
                addTodo(event, title);
                setTitle("")
            }}
            className='flex items-center gap-[20px]'
            >
                <input type="text" value={title} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setTitle(event.target.value)
                }}
                className='outline-[aqua] border-[1px] border-[black] rounded-[30px]'
                />
                <button type='submit' className='p-[3px_20px] bg-[green] rounded-[40px] text-[#fff]'>Add</button>
            </form>
    </div>
  )
}

export default FormToDo