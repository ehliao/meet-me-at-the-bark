const router = require('express').Router();
const { Pet, Owner } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const petData = await Pet.findAll({
            include: [
                {
                    model: Owner,
                    attributes: ['name']
                },
            ],
        });
        const pets = petData.map((pet) => pet.get({ plain: true }));
        res.render('mainpage', {
            pets,
            logged_in: req.session.logged_in
        });
    } catch (err){
        res.status(500).json(err);
    }
});

router.get('/pet/:id', async (req, res) => {
    try {
        const petData = await Pet.findByPk(req.params.id, {
            include: [
                {
                    model: Owner,
                    attributes: ['name'],
                },
            ],
        });
        const pet = petData.get({ plain: true });
        res.render('pet', {
            ...pet,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/profile', withAuth, async (req, res) => {
    try {
        const ownerData = await Owner.findByPk(req.session.owner_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Pet }],
        });

        const owner = ownerData.get({ plain: true });
        res.render('profile', {
            ...owner,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
});

module.exports = router;