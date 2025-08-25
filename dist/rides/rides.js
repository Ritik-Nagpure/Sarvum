import express from 'express';
const rides = express.Router();
rides.get('/', (req, res) => {
    res.send('Rides is runing');
});
export default rides;
