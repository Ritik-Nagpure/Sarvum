import express from 'express';
const arya = express.Router();
arya.get('/', (req, res) => {
    res.send('Arya is running !!');
});
export default arya;
