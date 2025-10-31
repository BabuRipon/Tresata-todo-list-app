import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

const TodoHeadingComponent = function(){
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location.pathname.split('/'));
    return (
        <div className="bg-blue-500 px-2 py-4 text-white">
            {location.pathname.split('/')[1]=='' &&
            <div className="flex justify-between">
                <span>Todo App</span>
                <span 
                    onClick={()=>navigate('/addTodo')}
                    className="cursor-pointer underline"
                >Add Todo</span>
            </div>}
            {location.pathname.split('/')[1]=='addTodo' &&
            <span className="flex items-center">
                <span className="flex w-[20px] h-[20px]" onClick={()=>navigate(-1)}><ArrowLeftIcon /></span>
                <span className="pl-2">Add Todo</span>
            </span>}
            {location.pathname.split('/')[1]=='editTodo' &&
            <span className="flex items-center">
                <span className="flex w-[20px] h-[20px]" onClick={()=>navigate(-1)}><ArrowLeftIcon /></span>
                <span className="pl-2">Edit Todo</span>
            </span>}
        </div>
    )
}

export default TodoHeadingComponent;