import express from 'express';
import type { Request, Response } from 'express'
import todos from './todos/todo.route.js'

const codegears = express.Router();

codegears.get('/', (req: Request, res: Response) => {
    res.send('Codegears is runing');
})
 
codegears.use('/todos', todos)

export default codegears