import express from 'express';
const astrobit = express.Router();
astrobit.get('/', (req, res) => {
    res.send('Astrobit is runing');
});
export default astrobit;
