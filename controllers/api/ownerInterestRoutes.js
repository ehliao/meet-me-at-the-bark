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

router.get('/', async (req, res) => {
    try {
        const ownerInterestData = await OwnerInterest.findAll({
            include: [
                {
                    model: Interest,
                    attributes: ['interest']
                },
            ],
        });
        const ownerInterests = ownerInterestData.map((OwnerInterest) => OwnerInterest.get({ plain: true }));
            console.log(ownerInterests);
            res.render('homepage', {
                ownerInterst: ownerInterests,
                logged_in: req.session.logged_in
            });
        } catch (err) {
            res.status(500).json(err);
        }
    });

module.exports = router;