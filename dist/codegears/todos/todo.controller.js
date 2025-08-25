import { createTodoService, getTodoService, getTodoServiceList } from './todo.services.js';
import { todoIdGenrator } from './todo.utils.js';
export const createTodo = (jbody) => {
    console.log('Inside create todo controller', jbody);
    let todoModel = {
        id: todoIdGenrator(),
        title: jbody.taskName,
        status: jbody.taskStatus,
    };
    let taskresponse = createTodoService(todoModel);
    return {};
};
export const deleteTodo = (jbody) => {
    return {};
};
export const updateTodo = (jbody) => {
    return {};
};
export const getTodo = async (todoid) => {
    let taskresponse = await getTodoService(todoid);
    return taskresponse;
};
export const getTodoList = async () => {
    let data = await getTodoServiceList();
    return data ?? [];
};
