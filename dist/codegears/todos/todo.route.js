import express from 'express';
import { createTodo, deleteTodo, updateTodo, getTodo, getTodoList } from './todo.controller.js';
const router = express.Router();
router.get('/', async (req, res) => {
    let taskresponse = await getTodoList();
    res.send(taskresponse);
});
router
    .route('/todo/:id')
    .get(async (req, res) => {
    let taskresponse = await getTodo(Number(req.params.id));
    res.send(taskresponse ?? null);
})
    .post((req, res) => {
    console.log('Hi', req.body);
    let taskresponse = createTodo(req.body);
    res.send(taskresponse);
})
    .put((req, res) => {
    let taskresponse = updateTodo(req.body);
    res.send(taskresponse);
})
    .delete((req, res) => {
    let taskresponse = deleteTodo(req.body);
    res.send(taskresponse);
});
export default router;
