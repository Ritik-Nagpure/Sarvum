import { payloadTodo } from '../../utils/interfaces.js'
import { validTodoStrings } from './todo.validator.js'

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createTodoService = (todoModel: payloadTodo) => {
    console.log('Inside create todo services', todoModel);

    let crt = async () => {
        await prisma.todo.create({
            data: {
                title: todoModel.title,
                status: todoModel.status
            }
        });
    }; 
    crt();
    console.log(todoModel)
}

export const deleteTodoService = () => {

}

export const updateTodoService = () => {

}

export const getTodoService = async (todoid: number | undefined): Promise<payloadTodo | null> => {
    const getData = await prisma.todo.findUnique({
        select: {
            id: true,
            title: true,
            status: true,
            completed: true
        },
        where: { id: todoid },
    });

    return getData;
}


export const getTodoServiceList = async (): Promise<payloadTodo[] | null> => {
    const allData = await prisma.todo.findMany(
        {
            select: {
                id: true,
                title: true,
                status: true,
                completed: true
            }
        }
    );
    console.log(allData)
    return allData
}

