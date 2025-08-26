import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const createTodoService = (todoModel) => {
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
    console.log(todoModel);
};
export const deleteTodoService = () => {
};
export const updateTodoService = () => {
};
export const getTodoService = async (todoid) => {
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
};
export const getTodoServiceList = async () => {
    const allData = await prisma.todo.findMany({
        select: {
            id: true,
            title: true,
            status: true,
            completed: true
        }
    });
    console.log(allData);
    return allData;
};
