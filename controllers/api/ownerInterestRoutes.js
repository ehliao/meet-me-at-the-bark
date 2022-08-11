const router = require('express').Router();
const { OwnerInterest } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newInterest = await OwnerInterest.create({
            ...req.body,
            owner_id: req.session.owner_id,
        });
        res.status(200).json(newInterest);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('')

module.exports = router;