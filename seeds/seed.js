const sequelize = require('../config/connection');
const { Owner, Pet, Interest, OwnerInterest } = require('../models');


const ownerData = require('./ownerData.json');
const petData = require('./petData.json');
const interestData = require('./interest.json');
const ownerInterestData = require('./ownerInterest.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  console.log(ownerData);
    const owners = await Owner.bulkCreate(ownerData, {
      individualHooks: true,
      returning: true,
    });

    const interests = await Interest.bulkCreate(interestData, {
      individualHooks: true,
      returning: true,
    });

    const ownerinterests = await OwnerInterest.bulkCreate(ownerInterestData, {
      individualHooks: true,
      returning: true,
    });
  
    for (const pet of petData) {
      await Pet.create({
        ...pet,
        user_id: owners[Math.floor(Math.random() * owners.length)].id,
      });
    }
  
    process.exit(0);
  };

seedDatabase();