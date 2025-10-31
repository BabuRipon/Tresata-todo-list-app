import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

import type { setTodosType, todo } from "../utils/types";
import { Statusenum } from "../utils/types";

const AddTodoForm = function ({setTodos}: setTodosType) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
       const newTodo: todo = {
        _id: uuidv4(),
        title,
        description,
        status: Statusenum.Progressing
        };
        setTodos(prev => {
            localStorage.setItem('todos',JSON.stringify([...prev ,newTodo]))
            return [...prev, newTodo]
        });
        setTitle('');
        setDescription('');
        navigate('/');
    }

    return (
        <div className="flex flex-col items-center my-10">
            <input type="text" placeholder="Input"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                className="w-3/5 px-1 py-2 my-2 border border-solid rounded border-black"
            />
            <input type="text" placeholder="Description"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                className="w-3/5 my-2 px-1 py-2 border border-solid rounded border-black"
            />
            <div className="w-3/5">
                <button 
                className="px-4 py-2 bg-slate-400 rounded-md"
                onClick={handleSubmit}
                >Save</button>
            </div>
        </div>
    )
}

export default AddTodoForm;