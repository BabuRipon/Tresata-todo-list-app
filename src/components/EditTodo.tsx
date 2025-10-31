import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import type { todosAndsetTodosType, todo} from "../utils/types";
import { Statusenum } from "../utils/types";

const EditTodoForm: React.FC<todosAndsetTodosType> = function ({todos, setTodos}) {
    const [todo, setTodo] = useState<todo>({
        _id: '',
        title: '',
        description: '',
        status: Statusenum.Progressing
    });
    const navigate = useNavigate();
    const { _id } = useParams<{ _id: string }>();
    useEffect(()=>{
        const todoEl = todos.find(todo=>todo._id==_id);
        if(todoEl){
            setTodo(todoEl);
        }
    },[])

    const handleSubmit = () => {
        const newTodos = todos.map(el=>{
            if(el._id==todo._id) return todo
            return el;
        })
        setTodos(newTodos);
        localStorage.setItem('todos',JSON.stringify(newTodos));
        navigate('/');
    }

    const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => { 
        const newStatus = e.target.value as Statusenum;
        setTodo(pre=>({...pre,status: newStatus}));
    }

    return (
        <div className="flex flex-col items-center my-10">
            <input type="text" placeholder="Input"
                value={todo?todo.title:''}
                onChange={(e)=>setTodo(pre=>({...pre,title: e.target.value}))}
                className="w-3/5 px-1 py-2 my-2 border border-solid rounded border-black"
            />
            <input type="text" placeholder="Description"
                value={todo ? todo.description: ''}
                onChange={(e)=>setTodo(pre=>({...pre,description: e.target.value}))}
                className="w-3/5 my-2 px-1 py-2 border border-solid rounded border-black"
            />
            <div className="w-3/5 my-2 py-2">
                <select value={todo.status} onChange={handleSelectionChange}>
                    <option value={Statusenum.Progressing}>{Statusenum.Progressing}</option>
                    <option value={Statusenum.Pending}>{Statusenum.Pending}</option>
                    <option value={Statusenum.Completed}>{Statusenum.Completed}</option>
                </select>
            </div>
            <div className="w-3/5">
                <button 
                className="px-4 py-2 bg-slate-400 rounded-md"
                onClick={handleSubmit}
                >update</button>
            </div>
        </div>
    )
}

export default EditTodoForm;