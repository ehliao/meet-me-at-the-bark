const router = require('express').Router();
const ownerRoutes = require('./ownerRoutes');
const petRoutes = require('./petRoutes');
const ownerInterestRoutes = require('./ownerInterestRoutes');
<<<<<<< HEAD
const fileUpload = require('./fileUpload');
=======
>>>>>>> fbbbb2d5aa3501bc245a79f5aa05372048ffe582

router.use('/owners', ownerRoutes);
router.use('/pets', petRoutes);
router.use('/ownerInterest', ownerInterestRoutes);
<<<<<<< HEAD
router.use('/fileUpload', fileUpload);
=======
>>>>>>> fbbbb2d5aa3501bc245a79f5aa05372048ffe582

module.exports = router;
