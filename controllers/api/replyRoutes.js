const router = require('express').Router();
const { Reply } = require('../../models');
const withAuth = require('../../utils/auth');

//get all replies
router.get('/', async (req, res) => {
    try {
        const getRep = await Reply.findAll({});
        res.json(getRep);
        console.log(getRep);
    } catch (err) {
        res.status(500).json(err)
    }
})

//get one reply
router.get('/:id', async (req, res) => {
    try {
        const oneRep = await Reply.findOne({
            where: {
                id: req.params.id,
            }
        })
        res.json(oneRep);
        console.log(oneRep);
    } catch (err) {
        res.status(500).json(err)
    }
});

//make reply with auth
router.post('/', withAuth, async (req, res) => {
    try {
        const makeReply = await Reply.create({
            reply_text: req.body.reply_text,
        })
        res.status(200).json(makeReply);
    } catch (err) {
        res.status(500).json(err);
    }
})
