import express from 'express';
import todos from './todos/todo.route.js';
const codegears = express.Router();
codegears.get('/', (req, res) => {
    res.send('Codegears is runing');
});
codegears.use('/todos', todos);
export default codegears;
