import {ITask} from '../types/task';

const baseUrl = 'http://localhost:3001/task';

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/tasks`, { cache: "no-store" });
    const todos = await res.json();
    return todos;
  };