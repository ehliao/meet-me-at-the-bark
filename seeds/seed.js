const sequelize = require('../config/connection');
const { Owner, Pet } = require('../models');

const ownerData = require('./ownerData.json');
const petData = require('./petData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const owners = await Owner.bulkCreate(ownerData, {
      individualHooks: true,
      returning: true,
    });
  
    for (const pet of petData) {
      await Owner.create({
        ...pet,
        user_id: owners[Math.floor(Math.random() * owners.length)].id,
      });
    }
  
    process.exit(0);
  };

seedDatabase();