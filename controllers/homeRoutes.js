const router = require('express').Router();
const { Pet, Owner, Interest, OwnerInterest } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const petData = await Pet.findAll({
            include: [
                {
                    model: Owner,
                    attributes: ['first_name', 'last_name'],
                },
            ],
        });
        const pets = petData.map((pet) => pet.get({ plain: true }));
            console.log(pets);
            res.render('homepage', {
                pets: pets,
                logged_in: req.session.logged_in
            });
        } catch (err) {
            res.status(500).json(err);
        }
    });

router.get('/pet/:id', async (req, res) => {
    try {
        const petData = await Pet.findByPk(req.params.id, {
            include: [
                {
                    model: Owner,
                    attributes: ['first_name', 'last_name'],
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
        console.log('about to run profile query')
        const ownerData = await Owner.findByPk(req.session.owner_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Interest }],
            // include: [{ all: true, nested: true }],
        });
        console.log(ownerData)
        const owner = ownerData.get({ plain: true });
        console.log(owner)
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


router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('signup');
});

module.exports = router;