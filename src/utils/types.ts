export enum Statusenum {
  Progressing = "Progressing",
  Pending = "Pending",
  Completed = "Completed"
}

export type todo = {
    _id: string
    title: string,
    description: string,
    status: Statusenum
}

export type todosType = {
    todos: todo[],
}

export type setTodosType ={
    setTodos: React.Dispatch<React.SetStateAction<todo[]>>
}

export type todosAndsetTodosType = {
    todos: todo[],
    setTodos: React.Dispatch<React.SetStateAction<todo[]>>;
}
