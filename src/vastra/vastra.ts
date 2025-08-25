import express from 'express';
import type { Request, Response, Express, Router } from 'express'

const vastra: Router = express.Router();

vastra.get('/', (req: Request, res: Response) => {
    res.send('Vastra is runing');
})

export default vastra