const Interest = require('./Interest');
const Owner = require('./Owner');
const OwnerInterest = require('./OwnerInterest');
const Pet = require('./Pet');

Owner.hasMany(Pet, {
    
})

module.exports = { Owner, Pet };
    foreignKey: 'owner_id',
    onDelete: 'CASCADE'
});

Pet.belongsTo(Owner, {
    foreignKey: 'owner_id'
});

Interest.belongsToMany(Owner, {
    through: {
        model: OwnerInterest,
        unique: false
      },
      // Define an alias for when data is retrieved
      as: 'interests_by_users'
});

Owner.belongsToMany(Interest, {
    through: {
        model: OwnerInterest,
        unique: false
      },
      // Define an alias for when data is retrieved
      as: 'users_by_interests'
});

module.exports = {Owner, Pet, Interest, OwnerInterest};
