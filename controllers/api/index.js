const router = require('express').Router();
const ownerRoutes = require('./ownerRoutes');
const petRoutes = require('./petRoutes');
const ownerInterest = require('./ownerInterestRoutes');

router.use('/owners', ownerRoutes);
router.use('/pets', petRoutes);
router.use('/ownerInterest', ownerInterest);

module.exports = router;
