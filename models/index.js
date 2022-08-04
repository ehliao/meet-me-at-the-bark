const Owner = require('./Owner');
const Pet = require('./Pet');

Owner.hasMany(Pet, {
    foreignKey: 'owner_id',
    onDelete: 'CASCADE'
});

Pet.belongsTo(Owner, {
    foreignKey: 'owner_id'
});

module.exports = {Owner, Pet};