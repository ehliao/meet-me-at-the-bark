const Owner = require('./Owner');
const Pet = require('./Pet');

Owner.hasMany(Pet, {
    
})

module.exports = { Owner, Pet };