const router = require('express').Router();
const ownerRoutes = require('./ownerRoutes');
const petRoutes = require('./petRoutes');
const ownerInterestRoutes = require('./ownerInterestRoutes');
const fileUpload = require('./fileUpload');

router.use('/owners', ownerRoutes);
router.use('/pets', petRoutes);
router.use('/ownerInterest', ownerInterestRoutes);
router.use('/fileUpload', fileUpload);

module.exports = router;
