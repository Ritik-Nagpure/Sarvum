import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import type { Express, Request, Response } from 'express';

import astrobit from './astrobit/astrobit.js';
import codegears from './codegears/codegears.js';
import rides from './rides/rides.js';
import vastra from './vastra/vastra.js';
import arya from './arya/arya.js';

import path from 'path';
import { fileURLToPath } from 'url';

import { logMessage } from './utils/logger.js';

dotenv.config();

const port = process.env.PORT || 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sarvum: Express = express();
sarvum.use(cors());
sarvum.use(express.json());
sarvum.use(express.urlencoded({ extended: true }));

sarvum.use('/assets', express.static(path.join(__dirname, '..', 'public', 'assets')));
sarvum.use('/defaults', express.static(path.join(__dirname, '..', 'public', 'defaults')));

sarvum.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname,  '..', 'public', 'index.html'));
});

sarvum.get('/service_status', (req: Request, res: Response) => {
    const status = {
        status: 'App is running fine for now !',
        code: 200
    };
    logMessage('Status is requested.');
    res.json(status)
});


// --> Arya Application
sarvum.use('/api/arya', arya);
// --> Astrobit Application
sarvum.use('/api/astrobit', astrobit);
// --> Codegears Application
sarvum.use('/api/codegears', codegears);
// --> Rihal Rides Application
sarvum.use('/api/rihal/rides', rides);
// --> Rihal Vastra Application 
sarvum.use('/api/rihal/vastra', vastra);

// when nothing matches use this
sarvum.use((req: Request, res: Response) => {
    res.status(404).sendFile(path.join(__dirname, '..', 'public', 'defaults', 'error_404.html'));
});

sarvum.listen(port, () => {
    console.log(`Application is running of port ${port}`)
    logMessage(`Application is running of port ${port}`)
});
