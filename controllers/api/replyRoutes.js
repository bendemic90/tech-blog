const router = require('express').Router();
const { Reply, Post } = require('../../models');
const withAuth = require('../../utils/auth');

//get all replies
router.get('/', (req, res) => {
  Reply.findAll({})
    .then(reply => res.json(reply))
    .catch(err => {
        res.status(500).json(err)
    })
});

//get one reply
// router.get('/:id', async (req, res) => {
//     try {
//         const oneRep = await Reply.findOne({
//             where: {
//                 id: req.params.id,
//             }
//         })
//         res.json(oneRep);
//         console.log(oneRep);
//     } catch (err) {
//         res.status(500).json(err)
//     }
// });

//post a reply with auth
router.post('/', withAuth, async (req, res) => {
    try {
        const makeReply = await Reply.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        console.log(makeReply);
        res.status(200).json(makeReply);
        if (!makeReply) {
            res.status(404).json({ message: `not found :(` })
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;