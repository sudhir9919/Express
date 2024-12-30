import express from 'express';

const router = express.Router();

router.get('/', (req, res)=> {
    return res.json({
        message: 'Welcome to the comment route V2'
    });
});
router.get('/:id', (req, res)=> {
    return res.json({
        message: 'Welcome to the comment route V2   ',
        id: req.params.id
    })
});


export default router;