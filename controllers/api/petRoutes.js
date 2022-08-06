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


// router.deleted('/:id', withAuth, async (req, res) => {
//     try {
//         const petData = await Pet.destroy({
//             where: {
//                 id: req.params.id,
//                 owner_id: req.session.owner_id,
//             },
//         });
//         if (!petData) {
//             res.status(404).json({ message: "No pet found" });
//             return;
//         }
//         res.status(200).json(petData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });



module.exports = router;
