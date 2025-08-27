import express from 'express';
import type { Request, Response, Express } from "express";

const arya = express.Router();

arya.get('/', (req: Request, res: Response) => {
    res.send('Arya is running !!');
});


export default arya;