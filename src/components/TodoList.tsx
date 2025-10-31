import { useEffect, useState } from "react";
import type { todosAndsetTodosType, todo } from "../utils/types";
import { ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/24/solid'
import { Statusenum } from "../utils/types";
import TodoItem from "./TodoItem";

const TodoList = function ({todos, setTodos}: todosAndsetTodosType) {
    const [openBar, setOpenBar] = useState(Statusenum.Progressing)

    useEffect(()=>{
        const raw = localStorage.getItem('todos');
        if (!raw) return;  // if null or empty, exit
        
        const allTodos: todo[] = JSON.parse(raw);
        console.log('allTodos : ',allTodos);
        setTodos(allTodos);
    },[])

    return (
        <div>
            <div className="my-4">
                <div className="bg-slate-300 p-2 flex justify-between" onClick={()=>setOpenBar(Statusenum.Progressing)}>
                    <div >In Progress ({todos.filter(todo=>todo.status==Statusenum.Progressing).length})</div>
                    {
                        openBar==Statusenum.Progressing ? <ChevronDownIcon className="w-6 h-6"/> : <ChevronUpIcon className="w-6 h-6"/>
                    }
                </div>
                {
                   openBar==Statusenum.Progressing && todos.filter(el=>el.status==Statusenum.Progressing).map(todo => <TodoItem todo={todo} todos={todos} setTodos={setTodos}/>)
                }
            </div>
            <div className="my-4">
                <div className="bg-slate-300 p-2 flex justify-between" onClick={()=>setOpenBar(Statusenum.Pending)}>
                    <div>Pending ({todos.filter(todo=>todo.status==Statusenum.Pending).length})</div>
                    {
                        openBar==Statusenum.Pending ? <ChevronDownIcon className="w-6 h-6"/> : <ChevronUpIcon className="w-6 h-6"/>
                    }
                </div>
                {
                   openBar==Statusenum.Pending && todos.filter(el=>el.status==Statusenum.Pending).map(todo => <TodoItem todo={todo} todos={todos} setTodos={setTodos} />)
                }
            </div>
            <div className="my-4">
                <div className="bg-slate-300 p-2 flex justify-between" onClick={()=>setOpenBar(Statusenum.Completed)}>
                    <div>Completed ({todos.filter(todo=>todo.status==Statusenum.Completed).length})</div>
                    {
                        openBar==Statusenum.Completed ? <ChevronDownIcon className="w-6 h-6"/> : <ChevronUpIcon className="w-6 h-6"/>
                    }
                </div>
                {
                   openBar==Statusenum.Completed && todos.filter(el=>el.status==Statusenum.Completed).map(todo => <TodoItem todo={todo} todos={todos} setTodos={setTodos} />)
                }
            </div>
        </div>
    )
}

export default TodoList;