import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import astrobit from './astrobit/astrobit.js';
import codegears from './codegears/codegears.js';
import rides from './rides/rides.js';
import vastra from './vastra/vastra.js';
import path from 'path';
import { fileURLToPath } from 'url';
dotenv.config();
const port = process.env.PORT || 8080;
const sarvum = express();
sarvum.use(cors());
sarvum.use(express.json());
sarvum.use(express.urlencoded({ extended: true }));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
sarvum.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'defaults', 'error_404.html'));
});
sarvum.get('/service_status', (req, res) => {
    const status = {
        status: 'App is running fine for now !',
        code: 200
    };
    res.json(status);
});
sarvum.use('/api/astrobit', astrobit);
sarvum.use('/api/codegears', codegears);
sarvum.use('/api/rihal/rides', rides);
sarvum.use('/api/rihal/vastra', vastra);
sarvum.use((req, res) => {
    res.sendStatus(404);
});
sarvum.listen(port, () => {
    console.log(`Application is running of port ${port}`);
});
