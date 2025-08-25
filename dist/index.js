import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import astrobit from './astrobit/astrobit.js';
import codegears from './codegears/codegears.js';
import rides from './rides/rides.js';
import vastra from './vastra/vastra.js';
dotenv.config();
const port = process.env.PORT || 8080;
const sarvum = express();
sarvum.use(cors());
sarvum.use(express.json());
sarvum.use(express.urlencoded({ extended: true }));
sarvum.use('/astrobit', astrobit);
sarvum.use('/codegears', codegears);
sarvum.use('/rihal/rides', rides);
sarvum.use('/rihal/vastra', vastra);
sarvum.use((req, res) => {
    res.sendStatus(404);
});
sarvum.listen(port, () => {
    console.log(`Application is running of port ${port}`);
});
