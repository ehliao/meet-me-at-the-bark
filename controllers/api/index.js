const router = require('express').Router();
const ownerRoutes = require('./ownerRoutes');
const petRoutes = require('./petRoutes');
const ownerInterestRoutes = require('./ownerInterestRoutes');

router.use('/owners', ownerRoutes);
router.use('/pets', petRoutes);
router.use('/ownerInterest', ownerInterestRoutes);

module.exports = router;
