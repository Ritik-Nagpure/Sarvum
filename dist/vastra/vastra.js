import express from 'express';
const vastra = express.Router();
vastra.get('/', (req, res) => {
    res.send('Vastra is runing');
});
export default vastra;
