const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const myProfile = require('./myProfile.js')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/profile', myProfile)

module.exports = router;
