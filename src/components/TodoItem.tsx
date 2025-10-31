import { Statusenum, type todo } from "../utils/types";
import { useNavigate } from "react-router-dom";
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid'

const TodoItem: React.FC<{todo:todo}> = function ({todo}) {
    const navigate = useNavigate();
    
    return (
        <div key={todo._id}
            className={`
                px-4 py-2 my-2 bg-slate-100 rounded
                ${todo.status== Statusenum.Completed ? "opacity-50 pointer-events-none cursor-not-allowed" : ""}
            `}
        >
            <div className="flex justify-between">
                <div>{todo.title}</div>
                <div>{todo.status}</div>
            </div>
            <div>{todo.description}</div>
            <div className="flex justify-between">
                <div>date:</div>
                <div className="flex">
                    <span
                        className="inline-block px-2"
                        onClick={()=>navigate(`/editTodo/${todo._id}`)}
                    ><PencilIcon className='h-5 w-5 text-slate-400'/></span>
                    <span className="inline-block"><TrashIcon className='h-5 w-5 text-slate-400'/></span>
                </div>
            </div>
        </div>
    )
}

export default TodoItem;
