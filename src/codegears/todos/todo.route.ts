import express from 'express';
import type { Request, Response } from 'express';
import type { payloadTodo, controllerReturn } from '../../utils/interfaces.js';

import {
    createTodo, deleteTodo, updateTodo, getTodo, getTodoList
} from './todo.controller.js'

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    let taskresponse: payloadTodo[] = await getTodoList();

    res.send(taskresponse)
});
router
    .route('/todo/:id')
    .get(
        async (req: Request, res: Response) => {
            let taskresponse: payloadTodo | null = await getTodo(Number(req.params.id));
            res.send(taskresponse ?? null)
        }
    )
    .post(
        (req: Request, res: Response) => {
            console.log('Hi', req.body)
            let taskresponse: controllerReturn = createTodo(req.body);
            res.send(taskresponse)

        }
    )
    .put(
        (req: Request, res: Response) => {
            let taskresponse: controllerReturn = updateTodo(req.body);
            res.send(taskresponse)
        }
    )
    .delete(
        (req: Request, res: Response) => {
            let taskresponse: controllerReturn = deleteTodo(req.body);
            res.send(taskresponse)
        }
    )

export default router;