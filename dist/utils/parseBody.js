export const parseReqBody = (req, res, next) => {
    if (!req.body && req.method != 'GET') {
        console.log(req.method, typeof req.method);
        res.status(400).json({
            error: 'Missing Request Body. No payload Received !!!'
        });
    }
    next();
};
