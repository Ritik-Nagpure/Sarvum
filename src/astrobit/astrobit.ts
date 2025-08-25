import express from 'express';
import type { Request, Response } from 'express'

const astrobit = express.Router();

astrobit.get('/', (req: Request, res: Response) => {
    res.send('Astrobit is runing');
})

export default astrobit