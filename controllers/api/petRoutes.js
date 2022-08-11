const router = require('express').Router();
const { Pet } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newPet = await Pet.create({
            ...req.body,
            owner_id: req.session.owner_id,
        });
        res.status(200).json(newPet);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
