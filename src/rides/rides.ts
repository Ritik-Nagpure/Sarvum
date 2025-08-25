import express from 'express';
import type { Request, Response } from 'express'

const rides = express.Router();

rides.get('/', (req: Request, res: Response) => {
    res.send('Rides is runing');
})

export default rides