const router = require('express').Router();
const { Owner } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const ownerData = await Owner.create(req.body);

        req.session.save(() => {
            req.session.owner_id = ownerData.id;
            req.session.logged_in = true;

            res.status(200).json(ownerData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const ownerData = await Owner.findOne({ where: { email: req.body.email } });
        console.log(ownerData);
        if (!ownerData) {
            res
                .status(400)
                .json({ message: "Invaild email" });
            return;
        }

        const ownerPassword = ownerData.checkPassword(req.body.password);

        if (!ownerPassword) {
            res
                .status(400)
                .json({ message: "Invalid email or password" });
            return;
        }

        req.session.save(() => {
            req.session.owner_id = ownerData.id;
            req.session.logged_in = true;
            console.log("set logged in session variable")
            res.json({ owner: ownerData, message: "Logged in" });
        });
        
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    console.log(req.session)
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        console.log("sending 500")
        res.status(500).end();
    }
});

module.exports = router;