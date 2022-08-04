const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pet extends Model {}

Pet.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        profilePhoto: {
            type: Sequelize.BLOB, // can use third  party API cloudinary per Lilo
        },
        breed: {
            type: DataTypes.STRING,
        },
        owner_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'owner',
                key: 'id',
            },
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true,
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'pet',
    }
);

module.exports = Pet;